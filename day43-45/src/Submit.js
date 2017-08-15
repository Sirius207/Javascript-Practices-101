import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'

import Ingredients from './Ingredients'
import IngredientList from './IngredientList'

const CLOUDINARY_UPLOAD_PRESET = '#';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/#/upload';


class Submit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')) || [],
      newRecipe: {
        name: '0',
        description: '0',
        ingredients: []
      },
      uploadedFileCloudinaryUrl: ''
    }
    this.submitRecipe = this.submitRecipe.bind(this)
    this.onImageDrop = this.onImageDrop.bind(this)
  }

  onImageDrop (files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  submitRecipe() {
    let newRecipe = this.state.newRecipe

    newRecipe.name = this.name.value
    newRecipe.description = this.description.value
    newRecipe.image = this.state.uploadedFileCloudinaryUrl

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
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img alt={this.state.uploadedFile.name} src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>
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