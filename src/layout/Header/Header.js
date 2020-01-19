import React, {useEffect} from 'react';

//Styles
import style from './Header.module.scss';

//Components
import Logo from '../Logo';
import MenuNav from '../MenuNav';
import Search from '../Search';
import Basket from '../Basket';
import Burger from '../Burger';

//Store
import { headerFetchAction } from '../../store/header/actions';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    categories: state.header.categories
  }
};

const mapDispatchToProps = {
  fetchData: headerFetchAction
};


const Header = ({fetchData, categories}) => {

  useEffect(() => {
    fetchData();
  }, []);

  return (

      <header className={style.header}>
        <div className={`container ${style.headerContent}`}>
          <Logo/>
          <div className={style.menuWrapper}>
            <MenuNav categories={categories}/>
          </div>
          <div className={style.search}>
            <Search/>
          </div>
          <div className={style.basket}>
            <Basket/>
          </div>
          <div className={style.burger}>
            <Burger categories={categories}/>
          </div>
        </div>
      </header>
  );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
