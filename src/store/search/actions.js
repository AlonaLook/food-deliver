export const SEARCH_FETCH = 'SEARCH_FETCH';
export const SEARCH_SET = 'SEARCH_SET';
export const SEARCH_ERROR = 'SEARCH_ERROR';


const searchFetchAction = (query) => {

  return ({
    type: SEARCH_FETCH,
    payload: query
  });
};

export default searchFetchAction;