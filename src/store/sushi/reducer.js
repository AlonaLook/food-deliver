import { SUSHI_SET } from './actions';

const initialState = {
  listSushi: []
};

const sushi = (state = initialState, action) => {
  switch (action.type) {
    case SUSHI_SET:
      return action.payload;

    default:
      return state;
  }
};

export default sushi;