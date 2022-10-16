// import { nanoid } from 'nanoid';
// import { Form } from './Form.styled';
import { Formik } from 'formik';

const initalValues = {
  name: '',
  number: '',
};

export const Form = () => {
  // nameID = nanoid();
  // numberID = nanoid();

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
  };

  return (
    <Formik initalValues={initalValues} onSubmit={handleSubmit}>
      <Form>
        <lable htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </lable>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

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
