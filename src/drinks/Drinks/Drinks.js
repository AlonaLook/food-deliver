import React, { useEffect, memo }from 'react';
import { connect } from 'react-redux';

//Components
import ListMeal from '../../dishes/ListMeal';

// Store
import drinksFetchAction from '../../store/drinks/actions';

const mapStateToProps = (state) => {
  const {drinks} = state.drinks;

  return {
    drinks
  }
};

const mapDispatchToProps = {
  fetchData: drinksFetchAction
};


const Drinks = memo(({ drinks, fetchData }) => {

  useEffect(() => {
    fetchData();
  }, []);

  return (<ListMeal listMeal={drinks} />);
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drinks);