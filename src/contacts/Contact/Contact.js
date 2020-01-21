import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';


//Styles
import style from './Contact.module.scss';

//Components
import Map from '../Map';


// Store
import contactFetchAction from '../../store/contact/actions.js';

const mapStateToProps = ({ contact }) => {
  const { listContacts, coords } = contact;

  return {
    coords,
    listContacts
  }
};

const mapDispatchToProps = {
  fetchData: contactFetchAction
};


const Contact = memo(({ coords, listContacts, fetchData }) =>{

  useEffect(() => {
    fetchData();
  }, []);

    return (
      // Important! Always set the container height explicitly
      <div className={style.contacts}>
        <div className={style.contactsMap}>
          { coords && <Map center={coords.center} zoom={coords.zoom} /> }
        </div>
        <ul className={style.list}>
          {listContacts.map(contact => {
            return(
              <li key={contact.id} className={style.listContact}>
                <div className={style.title}>
                  {contact.title}
                </div>
                <div className={style.description}>
                  {contact.description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);