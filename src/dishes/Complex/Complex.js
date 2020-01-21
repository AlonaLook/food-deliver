import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Style
import style from './Complex.module.scss';

//Components
import CardProduct from '../../components/CardProduct';


// Store
import complexesFetchAction from '../../store/complexes/actions';

const mapStateToProps = ({ complexes }) => {
  const { days } = complexes;

  return {
    days
  }
};

const mapDispatchToProps = {
  fetchData: complexesFetchAction
};

const Complex = memo(({ fetchData, days }) => {

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <>
      <div className={style.custom}>
        <Link to='./complex/custom' className={style.customLink}>
          Create your complex
        </Link>
      </div>
      {days.map(day => {
        return(
          <ul className={style.listDays} key={day.id}>
            <li>
              <h2>Complex {day.name}</h2>
              <ul className={style.dayComplexes}>
                {day.lunches.map(lunch => {
                  return (
                    <li key={lunch.id} className={style.dayComplexesItem}>
                      <CardProduct lunch={lunch}/>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </>
  );
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Complex);