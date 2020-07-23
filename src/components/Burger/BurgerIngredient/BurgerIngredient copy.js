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
                ingredient = <img src={bottomBun} alt="bottom bun" width='80%' />;
                break;
            case ('bread-top'):
                ingredient = ingredient = <img src={topBun} alt="top bun" width='80%' />;
                ;
                break;
            case ('meat'):
                ingredient = <img src={meat} alt="meat" width='80%' />;
                break;
            case ('cheese'):
                ingredient = <img src={cheese} alt="cheese" width='80%' />;
                break;
            case ('bacon'):
                ingredient = <img src={bacon} alt="bacon" width='80%' />;
                break;
            case ('salad'):
                ingredient = <img src={lettuce} alt="lettuce" width='80%' />;
                break;
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