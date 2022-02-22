import React, { Component } from 'react';
import AddProduct from './AddProduct';
import Quantity from './Quantity';

export default class Store extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      cart: [],
      quantity: 0,
    }
  }

  addToCart(){
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  removeFromCart(){
    this.setState({
      quantity: this.state.quantity - 1,
    });
  }

  render(){
    return (
      <div>
        <AddProduct item={this.state.items} />
        <Quantity 
          itemCount={this.state.quantity}
          addToCart={() => this.addToCart()} 
          removeFromCart={() => this.removeFromCart()} 
        />
      </div>
    );
  }
}