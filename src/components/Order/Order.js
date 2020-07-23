import React from 'react';
import classes from './Order.css';



const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName,
        quantity: props.ingredients[ingredientName]
      }
    )
  }

  const ingredientOutput = ingredients.map(ig => {
    let ingredientName;

    switch (ig.name) {
        case 'meat':
          ingredientName = 'patty';
            break;
        case 'salad':
          ingredientName = 'lettuce';
            break;
        default:
          ingredientName = ig.name;

    }
    return <span 
    style={{
      testTransform: 'capitalize',
      display: 'inline-block',
      margin: '0 8px',
      border: '1px solid #ccc',
      padding: '5px'
    }}
    key={ig.name}>{ingredientName} ({ig.quantity})</span> 
  })

  return (
    <div className={classes.Order}>
      <p>{ingredientOutput}</p>
      <p>Price: $ {props.price.toFixed(2)}</p>
    </div>
  )
}

export default Order
