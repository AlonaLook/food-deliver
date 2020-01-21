import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

//Styles
import style from './Dishes.module.scss'

//Components
import ListMeal from '../ListMeal';
import DropDown from '../../components/DropDown';

// Store
import dishesFetchAction from '../../store/dishes/actions';

const LOWER_TO_UPPER_PRICE = 'lower';


/**
 * Sort and filter list of dishes according to selected filter and sort parameters
 */
const sortAndFilter = (dishes, selectedFilter, selectedSort) => {
  const filteredDishes = selectedFilter // Filtering the dishes
    ? dishes.filter(dish => {
      return dish.ingredients.includes(selectedFilter);
    })
    : dishes;

  return selectedSort  // Sorting the disses
    ? filteredDishes.sort((prev, next) => selectedSort === LOWER_TO_UPPER_PRICE ? prev.price - next.price : next.price - prev.price)
    : filteredDishes;
};


const mapStateToProps = ({ dishes: { dishes, filterOptions, sortOptions } }) => {

  return {
    dishes,
    filterOptions,
    sortOptions
  }
};

const mapDispatchToProps = {
  dishesFetch: dishesFetchAction
};


const Dishes = ({dishes, dishesFetch, filterOptions, sortOptions}) => {

  const [selectedFilter, setFilter] = useState('');
  const [selectedSort, setSort] = useState('');

  useEffect(() => {
    dishesFetch();
  }, []);

  const handleFilterChange = useCallback((filter) => {
    setFilter(filter);
  }, [setFilter]);


  const handleSortChange = useCallback((sort) => {
    setSort(sort);
  }, [setSort]);

  const memoizedDishes = useMemo(() => {
    return sortAndFilter(dishes, selectedFilter, selectedSort);
  }, [dishes, selectedFilter, selectedSort]);

  return(
    <>
      <div className={style.wrapper}>
        <div className={style.wrapperDropdown}>
          <DropDown
            options={filterOptions}
            title="Фільтрувати"
            handleChange={handleFilterChange}
            selectedOption={selectedFilter}
          />
        </div>
        <div className={style.wrapperDropdown}>
          <DropDown
            options={sortOptions}
            title="Сортувати"
            handleChange={handleSortChange}
            selectedOption={selectedSort}
          />
        </div>
      </div>
      <ListMeal listMeal={memoizedDishes} />
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dishes);