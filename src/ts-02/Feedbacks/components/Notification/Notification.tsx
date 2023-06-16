import { FC } from 'react';
import { INotificationProps } from '../../interfaces/interfaces';
import { NotificationBox } from './Notification.styled';

export const Notification: FC<INotificationProps> = ({ message }) => {
  return <NotificationBox>{message}</NotificationBox>;
};
