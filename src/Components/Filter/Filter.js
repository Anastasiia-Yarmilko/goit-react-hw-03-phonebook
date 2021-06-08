import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, searchContact }) => {
  return (
    <label className={styles.label}>
      {' '}
      Find contacts by name
      <input
        className={styles.input}
        onChange={event => searchContact(event.target.value)}
        placeholder="Enter your search request"
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  searchContact: PropTypes.func.isRequired,
};

export default Filter;