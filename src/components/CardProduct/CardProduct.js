import React from 'react';

//Style
import style from './CardProduct.module.scss';
import CounterPurchases from '../CounterPurchases';

const CardProduct = ({lunch}) => {
  return (
      <div className={style.card}>
        <div className={style.wrapper}>
          <img src={lunch.img} alt={`${lunch.name} icon`} className={style.cardImg}/>
        </div>
        <h2 className={style.cardTitle}>{lunch.name}</h2>
        <div className={style.content}>
          {lunch.kitchen&&
            <h3 className={style.contentTitle}>
              Кухня - {lunch.kitchen}
            </h3>
          }
          {lunch.descriptions && lunch.descriptions.map((description, index) => {
            return (
                <p className={style.contentDescription} key={index}>
                  - {description}
                </p>
            );
          })}
        </div>
        <div className={style.contentPrice}>
          {lunch.price} грн
        </div>
        <div className={style.cardCounter}>
          <CounterPurchases product={lunch} />
        </div>
      </div>
  );
};

export default CardProduct;