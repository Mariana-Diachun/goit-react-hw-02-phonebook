import { Formik, Form, ErrorMessage } from 'formik';
import { Input } from './ContactForm.styled';
import schema from 'validation/validation';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};
const nameID = nanoid();
const numberID = nanoid();

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor={nameID}>
          Name
          <Input type="text" name="name" id={nameID} />
          <ErrorMessage name="name" compononet="p" />
        </label>
        <label htmlFor={numberID}>
          Number
          <Input type="tel" name="number" id={numberID} />
          <ErrorMessage name="number" compononet="p" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
