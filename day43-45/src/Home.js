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
        <div className='col-md-4 col-sm-6'>
          <div className='thumbnail'>
            <img src={recipe.image} alt={recipe.name} />
            <div className='caption'>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <IngredientList recipe={recipe} />
            </div> 
          </div>
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