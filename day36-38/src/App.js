import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Form1 from './Form1'

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
        <Clock />
        <Form1 />
      </div>
    )
  }
}

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      count: 0
    }
    this.setNumber = this.setNumber.bind(this)
  }
  setNumber() {
    this.setState({count: this.state.count + 1})
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick()
    }, 1000)
  }
  tick() {
    this.setState({date: new Date()})
  }
  componentWillUnMount() {
    clearInterval(this.timeID)
  }
  render () {
    return (
      <div>
        <h2>The Time is: {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.setNumber}>Update</button>
        <NumberComponent myNumber={this.state.count}/>
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
      ],
      count: 0
    }
    this.updateMyState = this.updateMyState.bind(this)
    this.updateNumber = this.updateNumber.bind(this)
  }
  componentWillMount () {
    console.log('WillMount')
  }

  componentDidMount () {
    console.log('DidMount')
  }

  componentWillReceiveProps (newProps) {
    console.log('WillReceiveProps')
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate (newProps, newState) {
    console.log('componentWillUpdate')
  }

  componentDidUpdate (newProps, newState) {
    console.log('componentDidUpdate')
  }

  componentWillUnMount () {
    console.log('WillUnMount')
  }
  updateMyState() {
    let count = this.state.count
    count++;
    let item = {
      'id': 'ee' + count,
      'name': 'oh',
      'age':'click - ' + count
    }
    let myArray = this.state.data
    myArray.push(item)
    this.setState({
      data: myArray,
      count: count
    })
  }
  updateNumber () {
    this.forceUpdate()
  }
  findMyDOMNode () {
    let myDiv = document.getElementById('myDiv')
    ReactDOM.findDOMNode(myDiv).style.color = 'red'
  }
  render() {
    return (
      <div className="App-intro">
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
        <div>
          <h4>Array: {this.props.propArray}</h4>
        </div>
        <button onClick={this.updateMyState}>Click</button>
        <button onClick={this.updateNumber}>Random</button>
        <h4>Random Number: {Math.random()}</h4>
        <button onClick={this.findMyDOMNode}>Find</button>
        <div id='myDiv'>testest</div>
      </div>
    )
  }
}

class NumberComponent extends Component {
  render () {
    return (
      <div>
        <h4>{this.props.myNumber}</h4>
      </div>
    )
  }
}



Content.propTypes = {
  propArray: React.PropTypes.array.isRequired
}

Content.defaultProps = {
  propArray: [1,2,3,4,5]
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
