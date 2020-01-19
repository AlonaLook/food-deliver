import { PIZZA_SET } from './actions';

const initialState = {
  listPizzas: []
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case PIZZA_SET:
      return action.payload;

    default:
      return state;
  }
};

export default pizzas;