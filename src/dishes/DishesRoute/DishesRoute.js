import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

//Components
import ComplexRoute from '../ComplexRoute';
import Dishes from '../Dishes';
import Pizza from '../Pizza';
import Sushi from '../Sushi';

const DishesRoute = () => {
  let { path } = useRouteMatch();

  return(
    <Switch>
      <Route path={`${path}/complex`} component={ComplexRoute} />
      <Route exact path={`${path}/pizza`} component={Pizza} />
      <Route exact path={`${path}/sushi`} component={Sushi} />
      <Route exact path={path} component={Dishes} />
    </Switch>
  );
};

export default  DishesRoute;