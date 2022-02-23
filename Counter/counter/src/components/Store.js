import React, { Component } from 'react';
import Quantity from './Quantity';
import Items from './Items';

export default class Store extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "",
      price: 0,
      items: [],
      cart: [],
      quantity: 0,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemNameChange = this.handleItemNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  increaseItemQuantityByOneInCart(){
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  removeItemFromCartByOne(){
    this.setState({
      quantity: this.state.quantity - 1,
    });
  }

  handleSubmit = (event) => {

    const {name, price } = this.state;
    const items = this.state.items.slice();
    
    event.preventDefault();

    this.setState({
       items: [...items, {name, price}],
    });

  }

  handleItemNameChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    });
  
  }

  handlePriceChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value, 
    });
  }

  render(){
    console.log(this.state.items);

    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name of Item:
              <input 
                type="text"
                name="name"
                onChange={this.handleItemNameChange}
                value={this.state.name}
              />
            </label>
            <label>Price of Item:
              <input
                type="number"
                name="price"
                onChange={this.handlePriceChange}
                value={this.state.price}
              />
            </label>
            <input type="submit" name="Submit" />
          </form>
          <Items items={this.state.items} />
          <Quantity 
            itemCount={this.state.quantity}
            addToCart={() => this.increaseItemQuantityByOneInCart()} 
            removeFromCart={() => this.removeItemFromCartByOne()} 
          />
        </div>
    );
  }
}