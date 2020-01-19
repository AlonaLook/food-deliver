import { HOT_DRINKS_SET } from './actions';

const initialState = {
  hotDrinks: []
};

const hotDrinks = (state = initialState, action) => {
  switch (action.type) {
    case HOT_DRINKS_SET:
      return action.payload;

    default:
      return state;
  }
};

export default hotDrinks;