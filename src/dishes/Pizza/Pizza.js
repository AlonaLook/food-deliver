import React, {useEffect, memo} from 'react';
import { connect } from 'react-redux';

//Components
import ListMeal from '../ListMeal';

// Store
import pizzaFetchAction from '../../store/pizza/actions';

const mapStateToProps = ({ pizzas }) => {
  const {listPizzas} = pizzas;

  return {
    listPizzas
  }
};

const mapDispatchToProps = {
  fetchData: pizzaFetchAction
};


const Pizza = memo(({ listPizzas, fetchData }) => {

  useEffect(() => {
    fetchData();
  }, []);

  return <ListMeal listMeal={listPizzas} />;
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pizza);