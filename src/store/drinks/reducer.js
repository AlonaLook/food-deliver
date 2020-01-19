import { DRINKS_SET } from './actions';

const initialState = {
  drinks: []
};

const drinks = (state = initialState, action) => {
  switch (action.type) {
    case DRINKS_SET:
      return action.payload;

    default:
      return state;
  }
};

export default drinks;