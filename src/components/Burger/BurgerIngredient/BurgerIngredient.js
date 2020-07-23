import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bottomBun from '../../../assets/images/Hamburger Design_files/white-bottom.png';
import topBun from '../../../assets/images/Hamburger Design_files/white-top.png';
import lettuce from '../../../assets/images/Hamburger Design_files/lettuce1.png';
import meat from '../../../assets/images/Hamburger Design_files/beef-single.png';
import cheese from '../../../assets/images/Hamburger Design_files/american.png';
import bacon from '../../../assets/images/Hamburger Design_files/bacon.png';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = (
                    <div className={classes.BreadBottom}>
                        <img src={bottomBun} alt="bottom bun" width='80%' sync/>
                    </div>
                );
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <img src={topBun} alt="top bun" width='80%' sync/>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = (
                    <div className={classes.Meat}>
                        <img src={meat} alt="meat" width='80%' sync/>
                    </div>
                );                break;
            case ('cheese'):
                ingredient = (
                    <div className={classes.Cheese}>
                        <img src={cheese} alt="cheese" width='80%' sync/>
                    </div>
                );                break;
            case ('bacon'):
                ingredient = (
                    <div className={classes.Bacon}>
                        <img src={bacon} alt="bacon" width='80%' sync/>
                    </div>
                );                break;
            case ('salad'):
                ingredient = (
                    <div className={classes.Salad}>
                        <img src={lettuce} alt="lettuce" width='80%' sync/>
                    </div>
                );                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;