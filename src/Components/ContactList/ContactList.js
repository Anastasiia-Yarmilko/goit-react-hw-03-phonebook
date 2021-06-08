import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ searchContact, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {searchContact.map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={id}>
            <p className={styles.contact}>
              {' '}
              {name}: {number}
            </p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  searchContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
