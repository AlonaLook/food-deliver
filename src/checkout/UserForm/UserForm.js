import React, { memo } from 'react';

//Styles
import style from './UserForm.module.scss';


const UserForm = memo(() => {
  return (
    <form action="#" method='post' name='userContact'>
      <div className={style.user}>
        <div className={style.userTitle}>Enter contact data</div>
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
          <label htmlFor='lastName' className={style.userDataLabel}>
            Second name:
          </label>
          <input
            type="text"
            placeholder='Last name'
            pattern='[A-Z]{1}[a-z]+'
            name='lastName'
            id='lastName'
            className={style.userDataInput}
          />
        </div>
        <div className={style.userData}>
          <label htmlFor='phone' className={style.userDataLabel}>
            Phone number:
          </label>
          <input
            type="tel"
            placeholder='+38(xxx)xxxxxxx'
            pattern='[\+]\d{2}[\(]\d{3}[\)]\d{7}'
            name='phone'
            id='phone'
            required
            className={style.userDataInput}
          />
        </div>
        <div className={style.userData}>
          <label htmlFor='email' className={style.userDataLabel}>
            Email:
          </label>
          <input
            type="email"
            placeholder='anystring@anystring.com'
            pattern='\S+@{1}[a-z]+\.com$'
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
            type="text"
            placeholder='Your address here...'
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
});

export default UserForm;