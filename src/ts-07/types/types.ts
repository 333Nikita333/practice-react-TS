import { ReactNode } from 'react';

export type RoutesProps = {
  component: ReactNode;
  redirectTo?: string;
};

export type ContactFormValues = {
  name: string;
  number: string;
};

export type ContactFormProps = {
  onSubmit: (name: string, number: string) => void;
};

export type ModalProps = {
  onCloseModal: () => void;
  id: string;
  name: string;
  number: string;
};
