import React, { useEffect, memo } from 'react';
import queryString from 'query-string';

//Components
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ListMeal from '../../dishes/ListMeal';

//Styles
import style from './SearchResults.module.scss';

// Store
import searchFetchAction from '../../store/search/actions';


const mapStateToProps = (state) => {
  const {listResults} = state.searchResults;

  return {
    listResults
  }
};

const mapDispatchToProps = {
  searchFetch: searchFetchAction
};

//Constants
const SINGULAR = ' item';
const PlURAL = ' items';


const SearchResults = memo(({ location, searchFetch, listResults }) => {
  const { query } = queryString.parse(location.search);
  const countItems = listResults.length;

  useEffect(() => {
    searchFetch(query)
  }, [query]);

  return (
      <>
        <div className={style.label}>
          Search results for
          <span className={style.query}>
            "{query}"
          </span>
          { ` is total count of ${countItems === 1 ?  countItems + SINGULAR : countItems + PlURAL}`}
        </div>
        <ListMeal listMeal={listResults}/>
      </>
  );

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchResults));