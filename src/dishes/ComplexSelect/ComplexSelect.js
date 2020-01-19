import React from 'react';

//Styles
import style from './ComplexSelect.module.scss';

const ComplexSelect = ({ list = {}, selectedId, selectComplexCallback }) => {
  //console.log('list', list);

  const changeHandler = (e) => {
    selectComplexCallback(list.name, e.target.id);
  };

  return (
    <div className={style.products}>
      <h3 className={style.productsTitle}>{list.title}</h3>
      <ul className={style.listProducts}>
        {list.products.map(product => {
          return (
            <li key={product.id} className={style.listProductsItem}>
              <input
                type="radio"
                id={product.id}
                name={list.name}
                value={product.value}
                checked={selectedId === product.id}
                onChange={changeHandler}
              />
              <label htmlFor={product.id}>{product.value}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ComplexSelect;