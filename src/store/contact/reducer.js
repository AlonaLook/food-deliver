import { CONTACT_SET } from './actions';

const initialState = {
  coords: null,
  listContacts: []
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_SET:
      return action.payload;

    default:
      return state;
  }
};

export default contact;