import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  let transIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    })
  })
  .reduce((prevVal, curVal) => {
    return prevVal.concat(curVal)
  }, []);
  if (transIngredients.length === 0) {
    transIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
};

export default burger;