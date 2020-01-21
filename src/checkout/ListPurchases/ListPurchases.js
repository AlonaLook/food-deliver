import React, { memo } from 'react';
import { connect } from 'react-redux';

//Styles
import style from './ListPurchases.module.scss';

//Components
import Purchase from '../Purchase'

// Store
import {removeFromBasketAction} from '../../store/basket/actions';

const mapDispatchToProps = {
  removeFromBasket: removeFromBasketAction
};


const ListPurchases = memo(({products, removeFromBasket}) =>{

  return(
    <ul className={style.listGoods}>
      {products.length > 0 &&
        <li className={style.listGoodsTitle}>
          List purchases
        </li>
      }
      {products.map(product => {
        return <Purchase product={product} key={product.id} removeFromBasket={removeFromBasket}/>
        })
      }

      {!products.length && <li className={style.emptyBasket}>No selected products</li>}
    </ul>
  );
});

export default connect(
  null,
  mapDispatchToProps
)(ListPurchases);