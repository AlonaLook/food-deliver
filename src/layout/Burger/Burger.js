import React, { useState, useCallback } from 'react';
//Styles
import {burger, burgerBtnOpen, burgerBtnClose} from './Burger.module.scss';

//Components
import MenuNav from '../../layout/MenuNav';

const Burger = ({ categories }) => {
  const [open, setOpen] = useState(false);

  const handleOpenClick = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  return(
    <div className={burger}>
      <div className={open ? burgerBtnOpen : burgerBtnClose} onClick={handleOpenClick} />
      {open && <MenuNav categories={categories}/>}
    </div>
  );
};

export default Burger;


