export type ContactFormProps = {
  onSubmit: (name: string, number: string) => void;
};

export type ContactFormValues = {
  name: string;
  number: string;
};

export type ContactFilterValue = {
  filter: string;
};
