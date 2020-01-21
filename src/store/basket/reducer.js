import { BASKET_ADD, BASKET_REMOVE } from './actions';

//Calculate total price for all products
const getTotalPrice = array => {
  return array.reduce((acc, cur) => {
    return acc + cur.price * cur.count;
  }, 0);
};

//Calculate total count of products

const getTotalCount = array => {
  return array.reduce((acc, current) => {
    return acc + current.count;
  }, 0);
};



//Initialization start state
const initialState = {
  totalCount: 0,
  totalPrise: 0,
  products: []
};

const basketReducer = (state = initialState, action) => {
  switch(action.type) {
    case BASKET_ADD: {
      let products = [];
      const { payload } = action;

      // Find target product in the basket
      // Will be undefined if product was not added previously
      const product = state.products.find(({ id }) => id === payload.id);

      if (product) {
        // If target product was found in basket extent it with new metadata and update counter
        products = state.products.map(item => {
          return product.id === item.id
            ? {
              ...item,
              count: item.count + payload.count,
              metaData: [...item.metaData, ...payload.metaData]
            }
            : item
        });
      } else {
        // If target product was not found just add it to the basket
        products = [...state.products, payload];
      }

      // Calculate total count of all products in the basket
      const totalCount = getTotalCount(products);

      // Calculate total price of all products in the basket
      const totalPrice = getTotalPrice(products);

      return { products, totalCount, totalPrice };
    }

    case BASKET_REMOVE: {
      const { payload: productId } = action;
      const products = state.products.filter(({ id }) => id !== productId);

      const totalPrice = getTotalPrice(products);
      const totalCount = getTotalCount(products);

      return { products, totalPrice, totalCount };
    }

    default:
      return state;
  }
};

export default basketReducer;
