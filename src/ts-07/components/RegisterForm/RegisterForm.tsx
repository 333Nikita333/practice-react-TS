import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { ObjectSchema, object, string } from 'yup';
import { register } from '../../redux/auth/operations';
import { AppDispatch } from '../../redux/store';
import { UserRegister } from '../../types/interfaces';
import {
  Container,
  ErrorMessageText,
  FormBox,
  Input,
  Label,
  SubmitButton,
  Text,
  Title,
} from './RegisterForm.styled';

const initialValues: UserRegister = {
  name: '',
  email: '',
  password: '',
};

const userSchema: ObjectSchema<UserRegister> = object({
  name: string()
    .required('Name is required')
    .min(2, 'Too Short!')
    .max(25, 'Too Long!'),
  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required'),
});

const RegisterForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (
    { name, email, password }: UserRegister,
    { resetForm }: FormikHelpers<UserRegister>
  ): void => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <FormBox autoComplete="off">
          <Title>Registration</Title>
          <Label>
            <Text>
              <FaUserAlt size={20} /> Name
            </Text>
            <Input placeholder="Please enter a name" type="text" name="name" />
            <ErrorMessage component={ErrorMessageText} name="name" />
          </Label>
          <Label>
            <Text>
              <FiMail size={20} />
              Email
            </Text>
            <Input
              placeholder="Please enter email address"
              type="text"
              name="email"
            />
            <ErrorMessage component={ErrorMessageText} name="email" />
          </Label>
          <Label>
            <Text>
              <RiLockPasswordFill size={20} />
              Password
            </Text>
            <Input
              placeholder="Please enter password"
              type="password"
              name="password"
            />
            <ErrorMessage component={ErrorMessageText} name="password" />
          </Label>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </FormBox>
      </Formik>
    </Container>
  );
};

export default RegisterForm;
