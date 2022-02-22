import React, { Component } from 'react';

class AddProduct extends Component {

  handleSubmit(e){

    
  }

  handleChange(e){

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name of Item:
          <input 
            type="text"
            name="name"
          />
        </label>
        <label>Price of Item:
          <input
            type="number"
            name="price"
          />
        </label>
        <input type="submit" name="Submit" />
      </form>
    )
  };

}

export default AddProduct;