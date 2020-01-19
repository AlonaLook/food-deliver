import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

//Components
import Kitchens from '../Kitchens';
import ItalianKitchen from '../ItalianKitchen';
import UkrainianKitchen from '../UkrainianKitchen';
import JapanKitchen from '../JapanKitchen';


const KitchensRoute = () => {
  let { path } = useRouteMatch();

  return(
    <Switch>
      <Route path={`${path}/italian`} component={ItalianKitchen} />
      <Route path={`${path}/ukrainian`} component={UkrainianKitchen} />
      <Route path={`${path}/japan`} component={JapanKitchen} />
      <Route exact path={path} component={Kitchens} />
    </Switch>
  );
};

export default  KitchensRoute;