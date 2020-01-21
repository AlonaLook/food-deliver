import React, { memo } from 'react';

//Style
import style from './CardProduct.module.scss';
import CounterPurchases from '../CounterPurchases';


const CardProduct = memo(({lunch}) => {
  return (
      <div className={style.card}>
        <div className={style.wrapper}>
          <img src={lunch.img} alt={`${lunch.name} icon`} className={style.cardImg}/>
        </div>
        <div className={style.cardTitle}>{lunch.name}</div>
        <div className={style.content}>
          {lunch.kitchen&&
            <div className={style.contentTitle}>
              Кухня - {lunch.kitchen}
            </div>
          }
          {lunch.descriptions && <ul className={style.contentDescription}>
            {
              lunch.descriptions.map((description, index) => {
                return (
                  <li className={style.contentDescriptionItem} key={index}>
                    - {description}
                  </li>
                );
              })
            }
          </ul>}
        </div>
        <div className={style.contentPrice}>
          {lunch.price} грн
        </div>
        <div className={style.cardCounter}>
          <CounterPurchases product={lunch} />
        </div>
      </div>
  );
});

export default CardProduct;