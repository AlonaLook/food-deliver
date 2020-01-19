import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

//Components
import Drinks from '../Drinks';
import Cocktails from '../Cocktails';
import HotDrinks from '../HotDrinks';
import VirginDrinks from '../VirginDrinks';

const DrinksRoute = () => {
  let { path } = useRouteMatch();

  return(
    <Switch>
      <Route path={`${path}/cocktails`} component={Cocktails} />
      <Route path={`${path}/hot`} component={HotDrinks} />
      <Route path={`${path}/virgin`} component={VirginDrinks} />
      <Route exact path={path} component={Drinks} />
    </Switch>
  );
};

export default  DrinksRoute;