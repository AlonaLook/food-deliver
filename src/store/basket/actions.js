export const BASKET_ADD = 'BASKET_ADD';
export const BASKET_REMOVE = 'BASKET_REMOVE';

export const addToBasketAction = (product, count, metaData) => ({
  type: BASKET_ADD,
  payload: { ...product, count, metaData }
});

export const removeFromBasketAction = (productId) => ({
  type: BASKET_REMOVE,
  payload: productId
});

