import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

//Styles
import style from './Search.module.scss';



const Search = ({history}) => {
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    history.push({
      pathname: '/search',
      search: `query=${query}`
    });

    setQuery('');
  };

  const queryChangeHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <form
      action='#'
      name='user-search'
      className={style.userSearch}
      onSubmit={submitHandler}
    >
      <input
        type='text'
        name='user-search'
        autoComplete='off'
        value={query}
        placeholder='Search...'
        className={style.userSearchText}
        onChange={queryChangeHandler}
      />
      <input
        type='submit'
        className={style.userSearchSubmit}
      />
      </form>
  );
};

export default withRouter(Search);