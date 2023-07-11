import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { ObjectSchema, object, string } from 'yup';
import { ContactFormProps, ContactFormValues } from '../../types/types';
import { Button, FormBox, InputName, InputTel } from './ContactForm.styled';

const initialValues: ContactFormValues = {
  name: '',
  number: '',
};

const userSchema: ObjectSchema<ContactFormValues> = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export default function ContactForm({ onSubmit }: ContactFormProps) {
  function handleSubmit(
    { name, number }: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) {
    onSubmit(name, number);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>Name</span>
          <InputName type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          <span>Tel</span>
          <InputTel type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
}
