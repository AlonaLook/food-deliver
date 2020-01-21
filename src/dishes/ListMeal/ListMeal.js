import React, { memo } from 'react';

//Styles
import style from './ListMeal.module.scss';

//Components
import CardProduct from '../../components/CardProduct';


const ListMeal = memo(({ listMeal }) => {

  return(
    <ul className={style.listMeal}>
      {listMeal.map(meal => {
        return (
          <li key={meal.id} className={style.listMealItem}>
            <CardProduct lunch={meal} />
          </li>
        );
      })}
    </ul>
  );
});

export default ListMeal;