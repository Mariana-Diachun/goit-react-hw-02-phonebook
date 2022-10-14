import { Component } from 'react';
import { Form } from 'components/Form/Form';

export class Phonebook extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };
  addContact = text => {
    console.log(text);
  };
  render() {
    return (
      <section>
        <h1>Phonebooks</h1>
        <Form onSubmit={this.formSubmitHandler} />

        <div>
          <h2>Contacts</h2>
          <ul>
            {this.addContact()}
            <li></li>
          </ul>
        </div>
      </section>
    );
  }
}
