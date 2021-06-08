import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Form extends Component {
    static propTypes = {
      addContact: PropTypes.func.isRequired,
    };
  
    state = {
      name: '',
      number: '',
    };
  
    onHandleChange = event => {
      const { name, value } = event.target;
      this.setState({[name]: value,});
    };
  
    onHandleSubmit = event => {
      event.preventDefault();
      const { addContact } = this.props;
      const contact = {
        id: this.state.id,
        name: this.state.name,
        number: this.state.number,
      };
      addContact(contact);
      this.setState({
        name: '',
        number: '',
      });
    };

    render() {
      const { name, number } = this.state;
      return (
        <form className={styles.form} onSubmit={this.onHandleSubmit}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.onHandleChange}
              placeholder="Enter your name"
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.onHandleChange}
              placeholder="Enter your phone number"
              className={styles.input}
              required
            />
          </label>
          <input type="submit" value="Add contact" className={styles.button} />
        </form>
      );
    }
  }

export default Form;