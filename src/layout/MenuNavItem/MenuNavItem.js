import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//style
import { menuNavItem,  menuNavLink, menuNavLinkActive, subMenu} from './MenuNavItem.module.scss';

//Components
import SubMenu from '../SubMenu';

export default class MenuNavItem extends Component {

  render(){
    const { category } = this.props;

    return (
        <li className={menuNavItem}>
          <NavLink
              to={`/${category.url}`}
              className={menuNavLink}
              activeClassName={menuNavLinkActive}
          >
            { category.name }
          </NavLink>

          <div className={subMenu}>
            <SubMenu subCategories={category.subCategories} />
          </div>
        </li>
    );
  }
}

