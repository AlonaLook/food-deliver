import React from 'react';
import { connect } from 'react-redux';

//Styles
import style from './Checkout.module.scss';

//Components
import UserForm from '../UserForm';
import ListPurchases from '../ListPurchases';

//Store
const mapStateToProps = ({ basket }) => ({
  basket
});


const Checkout = ({basket}) => {
  const {totalPrice, products, totalCount} = basket;

  return(
    <div className={style.checkout}>
      <div className={style.wrapper}>
        <UserForm/>
      </div>
      <div className={style.wrapper}>
        <ListPurchases products={products} />
        {totalCount > 0 && <div>Сума: {totalPrice} грн.</div>}
      </div>

    </div>
  );
};

export default connect(
  mapStateToProps
)(Checkout)
