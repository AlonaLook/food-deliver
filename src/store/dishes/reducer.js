import { DISHES_SET } from './actions';

const initialState = {
  dishes: [],
  filterOptions: [],
  sortOptions: []

};

const dishes = (state = initialState, action) => {
  switch (action.type) {
    case DISHES_SET:
      return action.payload;

    default:
      return state;
  }
};

export default dishes;