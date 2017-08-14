import React, {Component} from 'react'

class Submit extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.submitReceipt = this.submitReceipt.bind(this)
  }
  
  submitReceipt() {
    console.log('button Clicked')
    this.props.history.push('/')
  }
  
  render () {
    return (
      <div className='row'>
        <div className='col-xs-12 col-sm-12'>
          <h1>Submit</h1>
          <form>
            <div className="form-group">
              <label for="name">Email address</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name"/>
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <textarea className="form-control" id="description" placeholder="Password"/>
            </div>
            <div className="form-group form-inline">
              <label for="description">Quantity</label>
              <input type='text' className="form-control" id="quantity" placeholder="quantity"/>
              <label for="description">Ingredient</label>
              <input type='text' className="form-control" id="ingredient" placeholder="ingredient"/>
            </div>
            <button type="submit" className="btn btn-default" onClick={this.submitReceipt()} >Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Submit