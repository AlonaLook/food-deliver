import { SEARCH_SET } from './actions';

const initialState = {
  listResults: []
};

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SET:
      return action.payload;

    default:
      return state;
  }
};

export default searchResults;