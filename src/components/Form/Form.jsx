import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form.styled';
import { Formik } from 'formik';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameID = nanoid();
  numberID = nanoid();

  render() {
    return (
      <Formik>
        <form>
          Name
          <input
            type="text"
            id={this.nameID}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor={this.numberID}>
            Number
            <input
              type="tel"
              id={this.numberID}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </Formik>
    );
  }
}

// handleChange = event => {
//   this.setState({ [event.currentTarget.name]: event.currentTarget.value });
// };

// handleSubmit = event => {
//   event.preventDefault();
//   this.props.onSubmit(this.state);
//   this.reset();
// };

// reset = () => {
//   this.setState({ name: '' });
//   this.setState({ number: '' });
// };

// <form onSubmit={this.handleSubmit}>
//   <Form htmlFor={this.nameID}>
//     Name
//     <input
//       type="text"
//       id={this.nameID}
//       name="name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//       value={this.state.name}
//       onChange={this.handleChange}
//     />
//   </Form>
//   <label htmlFor={this.numberID}>
//     Number
//     <input
//       type="tel"
//       id={this.numberID}
//       name="number"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//       value={this.state.number}
//       onChange={this.handleChange}
//     />
//   </label>
//   <button type="submit">Add contact</button>
// </form>
