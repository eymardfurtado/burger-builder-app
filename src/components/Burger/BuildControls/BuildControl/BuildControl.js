import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => {

    const ingQuantity = props.ingredients[(props.label).toLowerCase()];
    let ingredient;

    switch (props.label) {
        case 'Meat':
            ingredient = 'Patty';
            break;
        case 'Salad':
            ingredient = 'Lettuce';
            break;
        default:
            ingredient = props.label;

    }

    // rename "meat" and "salad", fix the "please select ingredients" then deploy
    return (
        <div className={classes.BuildControl}>

            <div className={classes.Label}>{ingredient}</div>
            <button
                className={classes.Less}
                onClick={props.removed}
                disabled={ingQuantity <= 0}>Remove</button>
            <button
                className={classes.More}
                onClick={props.added}
                disabled={ingQuantity >= 1}>Add</button>
        </div>
    )
}

export default BuildControl;
