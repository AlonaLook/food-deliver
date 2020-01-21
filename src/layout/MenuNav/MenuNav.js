import React, { memo } from 'react';

//style
import {menuNav} from './MenuNav.module.scss';

//Components
import MenuNavItem from '../MenuNavItem';


const MenuNav = memo(({categories}) => {
  return (
    <nav>
      <ul className={menuNav}>
        {categories.map(category => <MenuNavItem key={category.id} category={category} />)}
      </ul>
    </nav>
  );
});

export default MenuNav;