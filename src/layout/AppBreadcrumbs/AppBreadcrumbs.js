import React, { memo } from 'react';

import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

//Styles
import style from './AppBreadcrumbs.module.scss';


const AppBreadcrumbs = memo(({ mappedRoutes }) => {
  return (
    <Breadcrumbs
      mappedRoutes={mappedRoutes}
      routeMatcherRegex="([\w-]+)"
      WrapperComponent={(props) => <ul className={style.crumbs} >{props.children}</ul>}
      ActiveLinkComponent={(props) => <li className={style.crumbsItemActive}>{props.children}</li>}
      LinkComponent={(props) => <li className={style.crumbsItem}>{props.children}</li>} // Don't create link tag or <Link />. Component will wrapp props.children with <Link />
    />
  );
});

export default AppBreadcrumbs;