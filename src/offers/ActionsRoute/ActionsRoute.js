import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

//Components
import PageFill from '../../components/PageFill';

const ActionsRoute = () => {
  let { path } = useRouteMatch();

  return(
    <Switch>
      <Route path={`${path}/drinks`} component={PageFill} />
      <Route exact path={`${path}/kitchens`} component={PageFill} />
      <Route exact path={`${path}/dishes`} component={PageFill} />
      <Route exact path={path} component={PageFill} />
    </Switch>
  );
};

export default  ActionsRoute;