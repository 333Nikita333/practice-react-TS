import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { deleteContact } from 'redux/contacts/operations';
import {
  ButtonChange,
  ButtonDelete,
  ContactInfo,
  Name,
  Number,
  Spinner,
  UserIcon,
  BtnWrapper,
} from './ContactListItem.styled';
import Modal from 'components/Modal/Modal';
import { useContacts } from 'hooks';

const ContactListItem = ({ id, name, number }) => {
  const [contactId, setContactId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error } = useContacts();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setContactId(id);

    if (!error) {
      toast.success(`Contact ${name} successfully deleted`);
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

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
