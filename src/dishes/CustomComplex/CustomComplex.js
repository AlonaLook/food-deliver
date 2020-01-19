import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Styles
import style from './CustomComplex.module.scss';

// Store
import customFetchAction from '../../store/custom/actions';

// Components
import ComplexSelect from '../ComplexSelect';
import CounterPurchases from '../../components/CounterPurchases/CounterPurchases';

const mapStateToProps = (state) => {
  const { listsProducts, main } = state.custom;

  return {
    main,
    listsProducts,
  }
};

const mapDispatchToProps = {
  fetchData: customFetchAction
};

const CustomComplex = ({ main, listsProducts, fetchData }) => {
  const [product, setProduct] = useState({});

  // Get 'product' object
  // Object with product name as a key and first sub product as a value
  const getDefaultState = (products = []) => {
    return products.reduce((acc, item) => {
      return { ...acc, [item.name]: item.products[0].id };
    }, {});
  };

  // Component did mount
  // Fetch data from the server
  useEffect(() => {
    fetchData();
  }, []);

  // Set 'product' state each time data is changed
  useEffect(() => {
    const defaultState = getDefaultState(listsProducts);

    setProduct(defaultState);
  }, [listsProducts]);

  // Update 'product' state
  // name - as a product property
  // id - as a product value
  const selectComplexHandler = (name, id) => {
    setProduct({ ...product, [name]: id });
  };

  return (
    <>
      <h1 className={style.title}>
        {main.name}
      </h1>
      <div className={style.custom}>
        {listsProducts.map(list => {
          return (
            <ComplexSelect
              key={list.name}
              list={list}
              selectedId={product[list.name]}
              selectComplexCallback={selectComplexHandler}
            />
          );
        })}
      </div>
      <div className={style.wrapper}>
        <CounterPurchases
          product={main}
          metaData={product}
        />
        <div className={style.price}>{main.price} грн</div>
      </div>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomComplex);