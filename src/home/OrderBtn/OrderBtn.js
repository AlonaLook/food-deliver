import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import style from './OrderBtn.module.scss';

const OrderBtn = memo((props) => {
  return (
    <Link to={props.url} className={style.orderBtn}>
      Замовити
    </Link>
  );
});

export default OrderBtn