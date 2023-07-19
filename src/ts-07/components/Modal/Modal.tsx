import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { createPortal } from 'react-dom';
import { patchContacts } from 'redux/contacts/operations';
import {
  Button,
  FormBox,
  FormikWrapper,
  InputName,
  Message,
  InputTel,
  Overlay,
  Title,
} from './Modal.styled';
import { useContacts } from 'hooks';
import { errorNotification, successNotification } from 'hooks/useToasts';

const modalRoot = document.querySelector('#modal-root');

const userSchema = object({
  name: string().matches(
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  ),
  number: string().matches(
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  ),
});

const Modal = ({ onCloseModal, id, name, number }) => {
  const dispatch = useDispatch();
  const { allContacts } = useContacts();

  const initialValues = {
    name: name,
    number: number,
  };

  useEffect(() => {
    const handleEscDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
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
      <FormikWrapper
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
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
      </FormikWrapper>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
