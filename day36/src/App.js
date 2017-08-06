import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerText: 'test'
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.headerText}</h1>
        <Content/>
      </div>
    )
  }
}

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          'id': 1,
          'name': 'foo',
          'age': '30'
        },
        {
          'id': 2,
          'name': 'foo',
          'age': '30'
        },
        {
          'id': 3,
          'name': 'foo',
          'age': '30'
        },
      ]
    }
  }
  render() {
    return (
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
        <table>
          <thead>
            <th>
              <td>ID</td>
              <td>NAME</td>
              <td>AGE</td>
            </th>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRows key={i} data={person}/>)}
          </tbody>
        </table>
      </p>
    )
  }
}

class TableRows extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
}

export default App;
