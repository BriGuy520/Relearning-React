import React from 'react';
import Quantity from './Quantity';

class Cart extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quantity: 0,
      items: [],
      total: 0,
    }
  }


  render(){
    <Quantity itemCount={this.state.quantity} />
  }

}



export default Cart;


