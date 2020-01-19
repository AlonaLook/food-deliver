import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import style from './Home.module.scss';

//Components
import CarouselLinks from '../CarouselLinks';
import ListGoods from '../ListGoods';

// Store
import { homeFetchAction } from '../../store/home/actions';

const mapStateToProps = (state) => {
  return {
    data: state.home
  }
};

const mapDispatchToProps = {
  fetchData: homeFetchAction
};

const Home = ({ fetchData, data }) => {

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={style.wrapper}>
        <CarouselLinks carousel={data.carousel} />
      </div>
      <ListGoods goods={data.goods} />
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
