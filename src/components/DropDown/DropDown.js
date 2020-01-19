import React, { useCallback } from 'react';

//Styles
import style from './DropDown.module.scss';


const DropDown = React.memo(({options = [], title = '', handleChange, selectedOption}) => {
  const getSelectValue = useCallback(e => {
    handleChange(e.target.value);
  }, [handleChange]);

  return (
    <div className={style.dropDown}>
      <div className={style.dropDownTitle}>
        { title }
      </div>
      <div className={style.wrapperSelect}>
        <select
          value={selectedOption}
          onChange={getSelectValue}
          className={style.select}
        >
          {options.map(option => {
            return (
              <option
                key={option.value}
                value={option.value}
                className={style.selectItem}
              >
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
});


export default DropDown;