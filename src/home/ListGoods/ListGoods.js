import React, { memo } from 'react';

//Styles
import styles from './ListGoods.module.scss';

//Components
import OrderBtn from '../OrderBtn';

const ListGoods = memo(({ goods }) => {
  return(
    <ul className={styles.listGoods}>
      {goods.map(good => {
        return (
          <li key={good.id} className={styles.goodItem}>
            <div className={styles.goodItemTitle}>{good.name}</div>
            <img src={good.imgUrl} alt={`${good.name} icon`} className={styles.goodItemImg} />
            <OrderBtn url={good.url} />
          </li>
        );
      })}
    </ul>
  );
});

export default ListGoods;
