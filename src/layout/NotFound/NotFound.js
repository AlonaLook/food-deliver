import React, { memo } from 'react';

//style
import style from './NotFound.module.scss';

const NotFound = memo(() => {
  return (
    <div className={style.title}>
      Page Not Found
    </div>
  );

});

export default NotFound;