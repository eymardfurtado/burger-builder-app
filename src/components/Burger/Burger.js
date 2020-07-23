import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        let selectIngMessage = <h3>Please select ingredients!</h3>
    if (transformedIngredients.length > 0) {
        selectIngMessage = <p>   </p>;
    }
    return (


            <div className={classes.Burger}>
                {selectIngMessage}
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>

    );
}


export default Burger;