import React, {useEffect} from 'react';
import { connect } from 'react-redux';

//Components
import ListMeal from '../ListMeal';

// Store
import pizzaFetchAction from '../../store/pizza/actions';

const mapStateToProps = (state) => {
  const {listPizzas} = state.pizzas;

  return {
    listPizzas
  }
};

const mapDispatchToProps = {
  fetchData: pizzaFetchAction
};

const Pizza = ({listPizzas, fetchData}) => {

  useEffect(() => {
    fetchData();
  }, []);

  return (<ListMeal listMeal={listPizzas}/>);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pizza);