import {
  Button,
  ContactInfo,
  Name,
  Number,
  Spinner,
  UserIcon,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import { ContactListItemProps } from '../../types/types';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../types/interfaces';

const ContactsListItem: FC<ContactListItemProps> = ({ contact }) => {
  const [contactId, setContactId] = useState<string | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const isLoading: boolean = useSelector((state: RootState) =>
    selectIsLoading(state)
  );
  const error: string | null = useSelector((state: RootState) =>
    selectError(state)
  );

  const handleDelete = (): void => {
    dispatch(deleteContact(contact.id));
    setContactId(contact.id);

    if (!error) {
      toast.success(`Contact ${contact.name} successfully deleted`);
      return;
    }
  };

  return (
    <>
      <UserIcon />
      <ContactInfo>
        <Name>{contact.name}</Name>
        <Number>{contact.number}</Number>
      </ContactInfo>

      {isLoading && contactId === contact.id ? (
        <Spinner size={40} />
      ) : (
        <Button type="button" onClick={handleDelete} disabled={isLoading}>
          <AiOutlineDelete size={20} />
        </Button>
      )}
    </>
  );
};

export default ContactsListItem;
