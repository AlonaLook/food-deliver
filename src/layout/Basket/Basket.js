import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

//Styles
import style from './Basket.module.scss';


const mapStateToProps = (state) => {
  return {
   total: state.basket.totalCount
  }
};

const Basket = ({total}) => {

  return (
      <div className={style.basket}>
        {total
          ? (<>
              <Link to='/checkout' className={style.basketActive} />
              <div className={style.basketTotal}>{total}</div>
            </>)
          : <span className={style.basketSpan}/>
        }
      </div>
  );
};

export default connect(
  mapStateToProps
)(Basket);