import React, { Component } from 'react'
import { gql, withApollo } from 'react-apollo'
import Link from './Link'

class Search extends Component {

  state = {
    links: [],
    searchText: ''
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type='text'
            onChange={(e) => this.setState({ searchText: e.target.value })}
          />
          <button
            onClick={() => this._executeSearch()}
          >
            OK
          </button>
        </div>
        {this.state.links.map((link, index) => <Link key={link.id} link={link} index={index}/>)}
      </div>
    )
  }

  _executeSearch = async () => {
    const { searchText } = this.state
    const result = await this.props.client.query({
      query: ALL_LINKS_SEARCH_QUERY,
      variables: { searchText }
    })
    const links = result.data.allLinks
    this.setState({ links })
  }

}

export default withApollo(Search)

const ALL_LINKS_SEARCH_QUERY = gql`
query AllLinksSearchQuery($searchText: String!) {
  allLinks(filter: {
    OR: [{
      url_contains: $searchText
    }, {
      description_contains: $searchText
    }]
  }) {
    id
    url
    description
    createdAt
    postedBy {
      id
      name
    }
    votes {
      id
      user {
        id
      }
    }
  }
}
`