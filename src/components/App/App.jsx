import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';

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

  // formSubmitHandler = data => {
  //   const contact = {
  //     id: nanoid(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h2>Contacts</h2> */}
        {/* <ContactList contacts={this.state.contacts} /> */}
      </div>
    );
  }
}
