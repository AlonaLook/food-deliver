import { HEADER_SET } from './actions';

const initialState = {
  categories: []
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case HEADER_SET:
      return action.payload;

    default:
      return state;
  }
};

export default header;
