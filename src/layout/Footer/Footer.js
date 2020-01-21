import React, {useEffect, memo} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//Style
import style from './Footer.module.scss';

// Store
import { footerFetchAction } from '../../store/footer/actions';

const mapStateToProps = (state) => {
  const { pages } = state.footer;

  return {
    pages
  }
};

const mapDispatchToProps = {
  fetchData: footerFetchAction
};


const Footer = memo(({ pages, fetchData }) => {

  useEffect(()=> {
    fetchData();
  }, []);

  return(
    <footer className={style.footer}>
      <div className={`container`}>
        <ul className={style.menu}>
          {pages.map(page => {
            return (
              <li key={page.id} className={style.menuItem}>
                <NavLink to={`/${page.url}`} className={style.menuLink} activeClassName={style.menuLinkActive}>
                  {page.name}
                </NavLink>
              </li>
            )})}
        </ul>
        <p className={style.footerCopyRight}>Copyright © 2020 FoodDeliver</p>
      </div>
    </footer>
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);