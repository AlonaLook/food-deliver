import React, {useEffect} from 'react';
import { connect } from 'react-redux';

//Components
import ListMeal from '../ListMeal';

// Store
import sushiFetchAction from '../../store/sushi/actions';


const mapStateToProps = (state) => {
  const {listSushi} = state.sushi;

  return {
    listSushi
  }
};

const mapDispatchToProps = {
  fetchData: sushiFetchAction
};

const Sushi = ({listSushi, fetchData}) => {

  useEffect(() => {
    fetchData();
  }, []);

  return(<ListMeal listMeal={listSushi}/>  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sushi);