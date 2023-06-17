import { ChangeEvent, Component, FormEvent } from 'react';
import { IFormData, IFormProps } from '../../interfaces/interfaces';
import { Button, FormBox, InputName, InputTel } from './Form.styled';

class Form extends Component<IFormProps, IFormData> {
  state: IFormData = {
    name: '',
    number: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormBox onSubmit={this.handleSubmit} autoComplete="off">
        <label>
          <span>Name</span>
          <InputName
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Tel</span>
          <InputTel
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    );
  }
}

export default Form;
