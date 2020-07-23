import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: true,
  building: false
};

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const addIngredient = (state, action) => {
  if(state.ingredients[action.ingredientName]>1) return state;
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  let newIngPrice = Number(INGREDIENT_PRICES[action.ingredientName]);
  let oldTotalPrice = Number(state.totalPrice);
  let newPriceFixed = (newIngPrice + oldTotalPrice).toFixed(2);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: newPriceFixed,
    building: true
  }

  
  return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
  const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  let newIngPrice = Number(INGREDIENT_PRICES[action.ingredientName]);
  let oldTotalPrice = Number(state.totalPrice);
  let newPriceFixed = (oldTotalPrice - newIngPrice).toFixed(2);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: newPriceFixed,
    building: true
  }
  return updateObject(state, updatedSt);

}

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    error: false,
    totalPrice: 4,
    building: false
  });
}

const fetchIngredients = (state, action) => {
  return updateObject(state, { error: true });
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredients(state, action);
    default: return state;
  }

};

export default reducer;