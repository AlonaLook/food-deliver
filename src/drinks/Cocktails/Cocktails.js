import React, { useEffect, memo }from 'react';
import { connect } from 'react-redux';

//Components
import ListMeal from '../../dishes/ListMeal';

// Store
import cocktailsFetchAction from '../../store/cocktails/actions';

const mapStateToProps = (state) => {
  const { cocktails } = state.cocktails;

  return {
    cocktails
  }
};

const mapDispatchToProps = {
  fetchData: cocktailsFetchAction
};


const Cocktails = memo(({ cocktails, fetchData }) => {

  useEffect(() => {
    fetchData();
  }, []);

  return <ListMeal listMeal={cocktails} />;
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cocktails);