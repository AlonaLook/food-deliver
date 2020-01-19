import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

//Components
import Complex from '../Complex';
import CustomComplex from '../CustomComplex';

const ComplexRoute = () => {
  let { path } = useRouteMatch();

  return(
    <Switch>
      <Route path={`${path}/custom`} component={CustomComplex} />
      <Route exact path={path} component={Complex} />
    </Switch>
  );
};

export default  ComplexRoute;