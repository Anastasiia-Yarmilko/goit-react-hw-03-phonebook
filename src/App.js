import React, { Component } from 'react';
import ContactList from './Components/ContactList/ContactList.js';
import Filter from './Components/Filter/Filter.js';
import Form from './Components/Form/Form.js';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onHandleNewContact = contact => {
    let { contacts } = this.state;
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} has been already added`);
      return;
    }
    contacts = [...contacts, contact];
    this.setState({ contacts });
  };

  onHandleChange = ({ target }) => {
    const title = target.value;
    this.setState({ title });
  };

  onHandleFilter = filter => {
    this.setState({ filter });
  };

  onHandleContactSearch = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = id => {
    this.setState(prevstate => {
      return {
        contacts: prevstate.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Form addContact={this.onHandleNewContact} />
        <Filter searchContact={this.onHandleFilter} value={filter} />
        <ContactList
          searchContact={this.onHandleContactSearch()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
