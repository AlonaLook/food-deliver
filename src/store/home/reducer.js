import { HOME_SET, HOME_ERROR, HOME_FETCH } from './actions';

const initialState = {
  carousel: [],
  goods: [],
  error: false,
  loading: false
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME_FETCH:
      return { ...state, loading: true };

    case HOME_SET:
      return { ...initialState, ...action.payload };

    case HOME_ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
};

export default home;
