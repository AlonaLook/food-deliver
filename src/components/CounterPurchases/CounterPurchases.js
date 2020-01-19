import React, { useState } from 'react';
import { connect } from 'react-redux';

// Style
import style from './CounterPurchases.module.scss';

// Store
import {addToBasketAction} from '../../store/basket/actions';


const mapDispatchToProps = {
  addToBasketAction
};

const CounterPurchases = (props) => {
  const defaultCount = 1;
  const [count, setCount] = useState(defaultCount);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const addToBasket = () => {
    const metaData = props.metaData ? [{ ...props.metaData, count }] : [];
    props.addToBasketAction(props.product, count, metaData);
    setCount(defaultCount);
  };

  return (
    <span className={style.counter}>
      <button
        disabled={count <= 1 || props.disabled}
        onClick={decrease}
        className={style.counterBtn}
      >-</button>

      <span className={style.counterInfo}>{count}</span>

      <button
        disabled={props.disabled}
        onClick={increase}
        className={style.counterBtn}
      >+</button>

      <span onClick={addToBasket} className={style.counterBasket} />
    </span>
  )
};

export default connect(
  null,
  mapDispatchToProps
)(CounterPurchases)