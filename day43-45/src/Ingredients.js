import React, {Component} from 'react'

class Ingredients extends Component {
  constructor(props) {
    super()
    this.state = {}
    this.addIngredients = this.addIngredients.bind(this)
  }

  addIngredients() {
    this.props.addIngredient(this.quantity.value, this.ingredient.value)
    this.quantity.value = ''
    this.ingredient.value = ''
  }

  render() {
    return (
      <div className="form-group form-inline">
        <label htmlFor="description">Quantity</label>
        <input
          type='text'
          className="form-control"
          ref={(input)=>{this.quantity = input}}
          id="quantity"
          placeholder="quantity"/>
        <label htmlFor="description">Ingredient</label>
        <input
          type='text'
          className="form-control"
          ref={(input)=>{this.ingredient = input}}
          id="ingredient"
          placeholder="ingredient"/>
        <button
          type="button"
          className="btn btn-default"
          onClick={this.addIngredients}>Add</button>
      </div>

    )
  }
}

export default Ingredients