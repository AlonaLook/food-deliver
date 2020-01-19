import React from 'react';

//Styles
import style from './UserForm.module.scss';

const UserForm = () => {
  return (
    <form action="#" method='post' name='userContact'>
      <div className={style.user}>
        <h1 className={style.userTitle}>Enter contact data</h1>
        <div className={style.userData}>
          <label htmlFor='firstName' className={style.userDataLabel}>
            First name:
          </label>
          <input
            type="text"
            placeholder='First Name'
            pattern='[A-Z]{1}[a-z]+'
            name='firstName'
            id='firstName'
            className={style.userDataInput}
          />
        </div>
        <div className={style.userData}>
          <label htmlFor='secondName' className={style.userDataLabel}>
            Second name:
          </label>
          <input
            type="text"
            placeholder='Second name'
            pattern='[A-Z]{1}[a-z]+'
            name='secondName'
            id='secondName'
            className={style.userDataInput}
          />
        </div>
        <div className={style.userData}>
          <label htmlFor='phone' className={style.userDataLabel}>
            Phone number:
          </label>
          <input
            type="phone"
            placeholder='Phone number'
            pattern='^+38({1}[0-9]{3})[0-9]{7}'
            name='phone'
            id='phone'
            className={style.userDataInput}
          />
        </div>
        <div className={style.userData}>
          <label htmlFor='email' className={style.userDataLabel}>
            Email:
          </label>
          <input
            type="email"
            placeholder='Email'
            pattern='[A-Za-z]+@{1}\.[a-z]\.[a-z]({2}|{3})'
            name='email'
            id='email'
            className={style.userDataInput}
          />
        </div>
        <div className={style.userData}>
          <label htmlFor='address' className={style.userDataLabel}>
            Address:
          </label>
          <input
            type="address"
            placeholder='Address'
            pattern='\w+'
            name='address'
            id='address'
            className={style.userDataInput}
          />
        </div>
        <div className={style.userSubmit}>
          <input type="submit" value='Submit' className={style.userSubmitBtn}/>
        </div>
      </div>
    </form>
  );
};

export default UserForm;