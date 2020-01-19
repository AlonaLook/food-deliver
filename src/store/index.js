import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// Reducers
import homeReducer from './home/reducer';
import headerReducer from './header/reducer';
import footerReducer from './footer/reducer';
import complexesReducer from './complexes/reducer';
import basketReducer from './basket/reducer';
import customReducer from './custom/reducer';
import contactReducer from './contact/reducer';
import pizzaReducer from './pizza/reducer';
import sushiReducer from './sushi/reducer';
import dishesReducer from './dishes/reducer';
import drinksReducer from './drinks/reducer';
import searchReducer from './search/reducer';
import cocktailsReducer from './cocktails/reducer';
import hotDrinksReducer from './hot_drinks/reducer';
import virginDrinksReducer from './virgin_drinks/reducer';

// Sagas
import { watchFetchHomeData } from './home/sagas';
import { watchFetchHeaderData } from './header/sagas';
import { watchFetchFooterData } from './footer/sagas';
import { watchFetchComplexesData } from './complexes/sagas';
import { watchFetchCustomData } from './custom/sagas';
import { watchFetchContactData } from './contact/sagas';
import { watchFetchPizzasData } from './pizza/sagas';
import { watchFetchSushiData } from './sushi/sagas';
import { watchFetchDishesData } from './dishes/sagas';
import { watchFetchDrinksData } from './drinks/sagas';
import { watchFetchSearchData } from './search/sagas';
import { watchFetchCocktailsData } from './cocktails/sagas';
import { watchFetchHotDrinksData } from './hot_drinks/sagas';
import { watchFetchVirginDrinksData } from './virgin_drinks/sagas';

function* rootSaga() {
  yield all([
    watchFetchHomeData(),
    watchFetchHeaderData(),
    watchFetchFooterData(),
    watchFetchComplexesData(),
    watchFetchCustomData(),
    watchFetchContactData(),
    watchFetchPizzasData(),
    watchFetchSushiData(),
    watchFetchDishesData(),
    watchFetchDrinksData(),
    watchFetchSearchData(),
    watchFetchCocktailsData(),
    watchFetchHotDrinksData(),
    watchFetchVirginDrinksData()
  ])
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    home: homeReducer,
    header: headerReducer,
    footer: footerReducer,
    complexes: complexesReducer,
    basket: basketReducer,
    custom: customReducer,
    contact: contactReducer,
    pizzas: pizzaReducer,
    sushi: sushiReducer,
    dishes: dishesReducer,
    drinks: drinksReducer,
    searchResults: searchReducer,
    cocktails: cocktailsReducer,
    hotDrinks: hotDrinksReducer,
    virginDrinks: virginDrinksReducer
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
