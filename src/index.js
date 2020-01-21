import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store'

//Styles
import './styles/index.scss';

//Components
import Header from './layout/Header';
import Footer from './layout/Footer';
import NotFound  from './layout/NotFound';
import AppBreadcrumbs  from './layout/AppBreadcrumbs';

import Home from './home/Home';
import DishesRoute from './dishes/DishesRoute';
import ActionsRoute from './offers/ActionsRoute';
import Contact from './contacts/Contact';
import Checkout from './checkout/Checkout';
import SearchResults from './search/SearchResults';
import DrinksRoute from './drinks/DrinksRoute';
import KitchensRoute from './kitchens/KitchensRoute';
import PageFill from './components/PageFill';

const routes = {
  '/': 'Home',
  '/checkout': 'Checkout',
  '/contact': 'Contact',
  '/about': 'About',
  '/how': 'How to make order',
  '/actions': 'Offers',
  '/actions/dishes': 'Offers Dishes',
  '/actions/drinks': 'Offers Drinks',
  '/actions/kitchens': 'Offers Kitchens',
  '/kitchens': 'Kitchens',
  '/kitchens/italian': 'Italian Kitchen',
  '/kitchens/ukrainian': 'Ukrainian Kitchen',
  '/kitchens/japan': 'Japan Kitchen',
  '/search': 'Search results',
  '/dishes': 'Dishes',
  '/drinks': 'Drinks',
  '/drinks/cocktails': 'Cocktails',
  '/drinks/hot': 'Hot drinks',
  '/drinks/virgin': 'Virgin drinks',
  '/dishes/pizza': 'Pizza',
  '/dishes/sushi': 'Sushi',
  '/dishes/complex': 'Complex',
  '/dishes/complex/custom': 'Custom',
  '/404': 'Page Not Found'
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <main className="container content">
        <AppBreadcrumbs mappedRoutes={routes} />
        <Switch>
          <Route path='/actions' component={ActionsRoute} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={PageFill} />
          <Route path='/how' component={PageFill} />
          <Route path='/dishes' component={DishesRoute} />
          <Route path='/drinks' component={DrinksRoute} />
          <Route path='/kitchens' component={KitchensRoute} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/search' component={SearchResults} />
          <Route exact path='/' component={Home} />
          <Route path='/404' component={NotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </main>
      <Footer/>
    </Router>
  </Provider>,
    document.getElementById('root')
);

