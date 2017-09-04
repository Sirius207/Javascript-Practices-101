import DataLoader from 'dataloader'
import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql'

import {
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';

const BASE_URL = 'https://myapp.com/'

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchPeople() {
  return fetchResponseByURL('/people/').then(json => json.people);
}

function fetchPersonByURL(relativeURL) {
  return fetchResponseByURL(relativeURL).then(json => json.person);
}

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Person') {
      return personLoader.load(`/people/${id}/`)
      //return fetchPersonByURL(`/people/${id}/`)
    }
  },
  object => {
    if (object.hasOwnProperty('username')) {
      return 'Person';
    }
  },
);

const personLoader = new DataLoader(
  urls => Promise.all(urls.map(fetchPersonByURL))
)

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    allPeople: {
      type: new GraphQLList(PersonType),
      resolve: fetchPeople,
    },
    node: nodeField
    person: {
      type: PersonType,
      args: {
        id: { type: GraphQLString },
      },
      //resolve: (root, args) => fetchPersonByURL(`/people/${args.id}/`),
      resolve: (root, args) => personLoader.load(`/people/${args.id}/`),
    }
  })
})

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'Somebody that you used to know',
  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve: person => person.first_name,
    },
    lastName: {
      type: GraphQLString,
      resolve: person => person.last_name,
    },
    email: {type: GraphQLString},
    id: globalIdField('Person'),
    username: {type: GraphQLString},
    friends: {
      type: new GraphQLList(PersonType),
      //resolve: person => person.friends.map(getPersonByURL),
      resolve: person => personLoader.loadMany(person.friends),
    },
  }),
  interfaces: [ nodeInterface ],
});

export default new GraphQLSchema({
  query: QueryType,
});