import React, {Component} from 'react'

class Form1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myInputValue: 'input'
    }
    this.myInputChanged= this.myInputChanged.bind(this)
  }
  myInputChanged(e) {
    let itemValue = e.target.value
    this.setState({myInputValue: itemValue})
  }
  render () {
    return(
      <div className='App-intro'>
        <MyInputComponent inputValue={this.state.myInputValue} myInputChanged = {this.myInputChanged}/>
        <h4>{this.state.myInputValue}</h4>
        <Select /> 
      </div>
    )
  }
}

class MyInputComponent extends Component {
  render () {
    return (
      <input value={this.props.inputValue} onChange={this.props.myInputChanged}/>
    )
  }
}

class Select extends Component {
   constructor(props) {
    super(props)
    this.state = {
      value: 'input'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({value: e.target.value})
  }
  handleSubmit (e){
    alert(this.state.value)
    e.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pick one</label>
        <select onChange={this.handleChange}>
          <option value='A'> A</option>
          <option value='B'> B</option>
        </select>
        <input type='submit' value='submit' />
      </form>
    )
  }
}
export default Form1