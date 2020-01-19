import { COCKTAILS_SET } from './actions';

const initialState = {
  cocktails: []
};

const cocktails = (state = initialState, action) => {
  switch (action.type) {
    case COCKTAILS_SET:
      return action.payload;

    default:
      return state;
  }
};

export default cocktails;