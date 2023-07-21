import { FC, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {
  errorNotification,
  successNotification,
  useContacts,
} from '../../hooks';
import { deleteContact } from '../../redux/contacts/operations';
import { AppDispatch } from '../../redux/store';
import { Contact } from '../../types/interfaces';
import Modal from '../Modal/Modal';
import {
  BtnWrapper,
  ButtonChange,
  ButtonDelete,
  ContactInfo,
  Name,
  Number,
  Spinner,
  UserIcon,
} from './ContactListItem.styled';

const ContactListItem: FC<Contact> = ({ id, name, number }) => {
  const [contactId, setContactId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const { isLoading, error } = useContacts();

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  const handleDelete = (): void => {
    dispatch(deleteContact(id));
    setContactId(id);

    if (error) {
      errorNotification(`Error: ${error}`);
      return;
    }

    if (!error) {
      successNotification(`Contact ${name} successfully deleted`);
    }
  };

  return (
    <>
      <UserIcon>{name[0]}</UserIcon>
      <ContactInfo>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </ContactInfo>

      <BtnWrapper>
        <ButtonChange type="button" onClick={toggleModal}>
          <BsThreeDots size={20} />
        </ButtonChange>
        {isLoading && contactId === id ? (
          <Spinner size={40} />
        ) : (
          <ButtonDelete
            type="button"
            onClick={handleDelete}
            disabled={isLoading}
          >
            <AiOutlineDelete size={20} />
          </ButtonDelete>
        )}
      </BtnWrapper>

      {showModal && (
        <Modal onCloseModal={toggleModal} id={id} name={name} number={number} />
      )}
    </>
  );
};

export default ContactListItem;
