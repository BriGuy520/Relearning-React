import React from 'react';


export default function Items (props){

  console.log(props.items);
  return (
    <div>
      <ul>
      {props.items.map(item => {
        return <li>{item.name} - ${item.price}</li>
      })}
      </ul>
    </div>
  );  
}
