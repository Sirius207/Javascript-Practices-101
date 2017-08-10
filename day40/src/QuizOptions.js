import React, {Component} from 'react'

class QuizOptions extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.callParentCheckOptions = this.callParentCheckOptions.bind(this)
  }
  callParentCheckOptions() {
    this.props.checkResults(this.props.option)
  }
  render() {
    return (
      <div className='fields animated zoomIn' >
        <div className='field-block' onClick={this.callParentCheckOptions}>{this.props.option}</div>
      </div>
    )
  }
}

export default QuizOptions