import React, { memo } from 'react';

//styles
import style from './PageFill.module.scss';

const PageFill = memo(({ text = 'Current'}) => {
 
  return(
    <h1 className={style.text}>
      {text} page has hot founded yet.
    </h1>
  );
});

export default  PageFill;