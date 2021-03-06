import React, { useEffect, memo } from 'react';
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


const Home = memo(({ fetchData, data }) => {

  useEffect(() => {
    fetchData();
  }, []);

  if(data.loading){
    return <div>Loading...</div>
  }

  if(data.error){
    return <div>Loading error</div>;
  }

  return (
    <>
      <div className={style.wrapper}>
        <CarouselLinks carousel={data.carousel} />
      </div>
      <ListGoods goods={data.goods} />
    </>
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
