import React, { memo, useCallback } from 'react';

//Styles
import style from './Purchase.module.scss';


const Purchase = memo(({product, removeFromBasket}) => {

  const handlerRemove = useCallback(() => {
    removeFromBasket(product.id);

  }, [removeFromBasket]);

  return(
    <li className={style.item}>
      <div className={style.good}>
        {product.img &&
          <div className={style.goodImgBox}>
            <img src={product.img} alt={product.name} className={style.goodImg}/>
          </div>
        }
        {product.name &&
          <div className={style.goodName}>
            {product.name}
          </div>
        }
        <div className={style.goodPrice}>Ціна: {product.price} грн</div>
      </div>
      <div className={style.goodCount}> Кількість: {product.count}</div>
      <div className={style.btnRemove} onClick={handlerRemove} />
    </li>
  );
});

export default Purchase;