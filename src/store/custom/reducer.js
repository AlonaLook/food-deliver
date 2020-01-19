import { CUSTOM_SET } from './actions';

const initialState = {
  main: {},
  listsProducts: []
};

const custom = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOM_SET:
      return action.payload;

    default:
      return state;
  }
};

export default custom;