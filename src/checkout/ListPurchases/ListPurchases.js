import React from 'react';
import { connect } from 'react-redux';

//Styles
import style from './ListPurchases.module.scss';

// Store
import {removeFromBasketAction} from '../../store/basket/actions';

const mapDispatchToProps = {
  removeFromBasket: removeFromBasketAction
};

const ListPurchases = ({products, removeFromBasket}) =>{

  return(
    <ul className={style.listGoods}>
      {products.map(product => {
        return(
          <li key={product.id} className={style.listGoodsItem}>
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
            <div className={style.btnRemove} onClick={() => removeFromBasket(product.id)}/>
          </li>
        );
      })}
      {!products.length && <li className={style.emptyBasket}>No selected products</li>}
    </ul>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(ListPurchases);