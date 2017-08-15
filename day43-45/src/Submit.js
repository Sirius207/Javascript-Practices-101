import React, {Component} from 'react'

import Ingredients from './Ingredients'
import IngredientList from './IngredientList'

class Submit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')) || [],
      newRecipe: {
        name: '0',
        description: '0',
        ingredients: []
      }
    }
    this.submitRecipe = this.submitRecipe.bind(this)
  }

  submitRecipe() {
    let newRecipe = this.state.newRecipe

    newRecipe.name = this.name.value
    newRecipe.description = this.description.value

    this.setState({newRecipe})

    let recipes = this.state.recipes
    recipes.push(newRecipe)
    this.setState({recipes})

    localStorage.setItem('recipes', JSON.stringify(recipes))
  }

  addIngredient(quantity, ingredient) {
    console.log('Add Ingredient')
    let newRecipe = this.state.newRecipe
    newRecipe.ingredients.push({quantity: quantity, ingredient: ingredient})
    this.setState(newRecipe: newRecipe)
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 col-sm-12'>
          <h1>Submit</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Email address</label>
              <input
                type="text"
                ref={(input) => {this.name = input}}
                className="form-control"
                id="name"
                placeholder="Enter name"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Description"
                ref={(input) => {this.description = input}} />
            </div>
            <IngredientList recipe={this.state.newRecipe} />
            <Ingredients addIngredient={(quantity, ingredient) => {this.addIngredient(quantity, ingredient)}} />
            <button
              type="button"
              className="btn btn-default"
              onClick={this.submitRecipe}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Submit