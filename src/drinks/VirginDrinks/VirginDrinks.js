import React, { useEffect, memo }from 'react';
import { connect } from 'react-redux';

//Components
import ListMeal from '../../dishes/ListMeal';

// Store
import virginDrinksFetchAction from '../../store/virgin_drinks/actions';

const mapStateToProps = (state) => {
  const {virginDrinks} = state.virginDrinks;

  return {
    virginDrinks
  }
};

const mapDispatchToProps = {
  fetchData: virginDrinksFetchAction
};


const VirginDrinks = memo(({ virginDrinks, fetchData }) => {

  useEffect(() => {
    fetchData();
  }, []);

  return (<ListMeal listMeal={virginDrinks} />);
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VirginDrinks);