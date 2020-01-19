import { VIRGIN_DRINKS_SET } from './actions';

const initialState = {
  virginDrinks: []
};

const virginDrinks = (state = initialState, action) => {
  switch (action.type) {
    case VIRGIN_DRINKS_SET:
      return action.payload;

    default:
      return state;
  }
};

export default virginDrinks;