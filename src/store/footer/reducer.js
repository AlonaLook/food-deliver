import {FOOTER_SET } from './actions';

const initialState = {
  pages : []
};

const footer = (state = initialState, action) => {
  switch (action.type) {
    case FOOTER_SET:
      return action.payload;

    default:
      return state;
  }
};

export default footer;
