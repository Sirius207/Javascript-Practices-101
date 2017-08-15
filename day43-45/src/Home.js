import React, {Component} from 'react'

import IngredientList from './IngredientList'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')) || []
    }
  }
  
  displayRecipes() {
    let resultArray = []
    this.state.recipes.forEach((recipe, i) => {
      resultArray.push(
        <div className='col-sm-4'>
          {recipe.name} <br/>
          {recipe.description} <br/>
          <IngredientList recipe={recipe} />
        </div>
      )
    })
    return resultArray
  }
  
  render () {
    return (
      <div>
        <h1>Home</h1>
        {this.displayRecipes()}
      </div>
    )
  }
}

export default Home