import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { FC, MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { ObjectSchema, object, string } from 'yup';
import {
  errorNotification,
  successNotification,
  useContacts,
} from '../../hooks';
import { patchContacts } from '../../redux/contacts/operations';
import { AppDispatch } from '../../redux/store';
import { ContactFormValues, ModalProps } from '../../types/types';
import {
  Button,
  FormBox,
  InputName,
  InputTel,
  Message,
  Overlay,
  Title,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

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

const Modal: FC<ModalProps> = ({ onCloseModal, id, name, number }) => {
  const dispatch: AppDispatch = useDispatch();
  const { allContacts } = useContacts();
  const initialValues: ContactFormValues = {
    name,
    number,
  };

  useEffect(() => {
    const handleEscDown = (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const handleSubmit = (
    { name, number }: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ): void => {
    for (const contact of allContacts) {
      if (number === contact.number) {
        errorNotification(
          `A contact with this number already exists under the name ${contact.name}`
        );
        return;
      }
    }
    dispatch(patchContacts({ name, id, number }));
    onCloseModal();
    successNotification('Сontact successfully changed');
    resetForm();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <FormBox autoComplete="off">
          <Title>Change a contact's name or number</Title>
          <label>
            <span>Name</span>
            <InputName
              placeholder="Enter new contact name"
              type="text"
              name="name"
            />
            <ErrorMessage component={Message} name="name" />
          </label>
          <label>
            <span>Phone</span>
            <InputTel
              placeholder="Enter new contact phone"
              type="tel"
              name="number"
            />
            <ErrorMessage component={Message} name="number" />
          </label>
          <Button type="submit">Change</Button>
        </FormBox>
      </Formik>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
