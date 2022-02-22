import React from 'react';
import '../index.css';

function Quantity(props){

  return (
    <div className="board-style">
      <button onClick={() => props.itemCount > 0 ?  props.removeFromCart() :  props.itemCount }>-</button>
      <p>{props.itemCount}</p>
      <button onClick={() =>  props.addToCart()}>+</button>
    </div>
  );
};

export default Quantity;