import { COMPLEXES_SET } from './actions';

const initialState = {
  days: []
};

const complexes = (state = initialState, action) => {
  switch (action.type) {
    case COMPLEXES_SET:
      return action.payload;
    default:
      return state;
  }
};

export default complexes;