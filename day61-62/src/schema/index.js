const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

// Define your types here.

const typeDefs = `
type Link {
  id: ID!
  url: String!
  description: String!
  postedBy: User
  votes: [Vote!]!
}


type Query {
  allLinks: [Link!]!
}

type Mutation {
  createLink(url: String!, description: String!): Link
  createVote(linkId: ID!): Vote
  createUser(name: String!, authProvider: AuthProviderSignupData!): User
  signinUser(email: AUTH_PROVIDER_EMAIL): SigninPayload!
}

type User {
  id: ID!
  name: String!
  email: String
  password: String
  votes: [Vote!]!
}

type Vote {
  id: ID!
  user: User!
  link: Link!
}

input AuthProviderSignupData {
  email: AUTH_PROVIDER_EMAIL
}

input AUTH_PROVIDER_EMAIL {
  email: String!
  password: String!
}

type SigninPayload {
  token: String
  user: User
}

type Subscription {
  Link(filter: LinkSubscriptionFilter): LinkSubscriptionPayload
}

input LinkSubscriptionFilter {
  mutation_in: [_ModelMutationType!]
}

type LinkSubscriptionPayload {
  mutation: _ModelMutationType!
  node: Link
}

enum _ModelMutationType {
  CREATED
  UPDATED
  DELETED
}

`;

// Generate the schema object from your types definition.
module.exports = {
  Query: {
    allLinks: () => links,
  },
  Mutation: {
    createLink: (_, data) => {
      const newLink = Object.assign({id: links.length + 1}, data);
      links.push(newLink);
      return newLink;
    }
  },
};