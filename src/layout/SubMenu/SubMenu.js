import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import {subMenu, subMenuItem, menuLink } from './SubMenu.module.scss';

const SubMenu = ({ subCategories }) => {
  return (
      <ul className={subMenu}>
        {subCategories.map(subCategory => {
          return<li key={subCategory.id} className={subMenuItem}>{
            <Link to={`/${subCategory.url}`} className={menuLink}>
              {subCategory.name}
            </Link>
          }</li>
        })}
      </ul>
  );
};

export default SubMenu;