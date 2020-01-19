import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

//Components
import Actions from '../Actions';
import DishesActions from '../DishesActions';
import DrinksActions from '../DrinksActions';
import KitchensActions from '../KitchensActions';

const ActionsRoute = () => {
  let { path } = useRouteMatch();

  return(
    <Switch>
      <Route path={`${path}/drinks`} component={DrinksActions} />
      <Route exact path={`${path}/kitchens`} component={KitchensActions} />
      <Route exact path={`${path}/dishes`} component={DishesActions} />
      <Route exact path={path} component={Actions} />
    </Switch>
  );
};

export default  ActionsRoute;