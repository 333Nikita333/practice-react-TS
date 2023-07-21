import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { ObjectSchema, object, string } from 'yup';
import { ContactFormProps, ContactFormValues } from '../../types/types';
import {
  Button,
  FormBox,
  InputName,
  InputTel,
  Message,
} from './ContactsForm.styled';

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

const ContactsForm: FC<ContactFormProps> = ({ onSubmit }) => {
  function handleSubmit(
    { name, number }: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ): void {
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
          <InputName placeholder="Enter contact name" type="text" name="name" />
          <ErrorMessage component={Message} name="name" />
        </label>
        <label>
          <span>Phone</span>
          <InputTel
            placeholder="Enter contact phone"
            type="tel"
            name="number"
          />
          <ErrorMessage component={Message} name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
};

export default ContactsForm;
