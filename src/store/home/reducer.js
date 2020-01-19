import { HOME_SET } from './actions';

const initialState = {
  carousel: [],
  goods: []
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME_SET:
      return action.payload;

    default:
      return state;
  }
};

export default home;
