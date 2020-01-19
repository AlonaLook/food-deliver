import React from 'react';
import { Link } from "react-router-dom";

//styles
import style from './Logo.module.scss';

const Logo = () => {
  return (
      <Link to='/' className={style.logo}>
        Food<span className={style.logoTitle}>Deliver</span>
      </Link>
  );
};

export default Logo;