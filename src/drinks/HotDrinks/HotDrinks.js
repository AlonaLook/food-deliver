import React, { useEffect, memo }from 'react';
import { connect } from 'react-redux';

//Components
import ListMeal from '../../dishes/ListMeal';

// Store
import hotDrinksFetchAction from '../../store/hot_drinks/actions';

const mapStateToProps = (state) => {
  const {hotDrinks} = state.hotDrinks;

  return {
    hotDrinks
  }
};

const mapDispatchToProps = {
  fetchData: hotDrinksFetchAction
};


const HotDrinks = memo(({ hotDrinks, fetchData }) => {

  useEffect(() => {
    fetchData();
  }, []);

  return (<ListMeal listMeal={hotDrinks} />);
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotDrinks);