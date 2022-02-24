import React from 'react';
import '../index.css';

function Quantity({ removeFromCart, addToCart, itemCount }){

  return (
    <div className="board-style">
      <button onClick={() => itemCount > 0 ?  removeFromCart() :  itemCount }>-</button>
      <p>{itemCount}</p>
      <button onClick={() =>  addToCart()}>+</button>
    </div>
  );
};

export default Quantity;