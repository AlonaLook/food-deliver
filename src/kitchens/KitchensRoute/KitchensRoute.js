import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

//Components
import PageFill from '../../components/PageFill';


const KitchensRoute = () => {
  let { path } = useRouteMatch();

  return(
    <Switch>
      <Route path={`${path}/italian`} component={PageFill} />
      <Route path={`${path}/ukrainian`} component={PageFill} />
      <Route path={`${path}/japan`} component={PageFill} />
      <Route exact path={path} component={PageFill} />
    </Switch>
  );
};

export default  KitchensRoute;