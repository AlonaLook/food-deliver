import React from 'react';

//Styles
import * as styles from './ListGoods.module.scss';
import OrderBtn from '../OrderBtn';

const ListGoods = ({goods}) => {
  return(<ul className={styles.listGoods}>
        {goods.map(good =>{
          return (
              <li key={good.id} className={styles.goodItem}>
                <h2 className={styles.goodItemTitle}>{good.name}</h2>
                <img src={good.imgUrl} alt={`${good.name} icon`} className={styles.goodItemImg}/>
                <OrderBtn url={good.url}/>
              </li>
          );
        })}
      </ul>
  );
};

export default ListGoods;
