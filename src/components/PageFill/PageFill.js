import React from 'react';

//styles
import style from './PageFill.module.scss';

const PageFill = ({text}) => {
  return(
    <h1 className={style.text}>
      {text} page has hot founded yet.
    </h1>
  );
};

export default  PageFill;