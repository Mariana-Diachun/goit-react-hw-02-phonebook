import { Component } from 'react';
import Notiflix from 'notiflix';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactsHandleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const nameToLowerCase = name.toLowerCase();
    const nameTransform = this.state.contacts.find(
      contact => contact.name.toLowerCase() === nameToLowerCase
    );
    const contact = { id: nanoid(), name, number };
    // console.log(contact);
    if (!nameTransform) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else {
      return Notiflix.Notify.failure(`${contact.name} is already in contacts`);
    }

    resetForm();
  };
  handleFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.contactsHandleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilter={this.handleFilter} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
