import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { ObjectSchema, object, string } from 'yup';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordFill } from 'react-icons/ri';
import {
  ErrorMessageText,
  Container,
  Label,
  Text,
  Input,
  FormBox,
  SubmitButton,
  Title,
} from './LoginForm.styled';
import { logIn } from '../../redux/auth/operations';
import { UserLogin } from '../../types/interfaces';
import { FC } from 'react';
import { AppDispatch } from '../../redux/store';

const initialValues: UserLogin = {
  email: '',
  password: '',
};

const userSchema: ObjectSchema<UserLogin> = object({
  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required'),
});

const LoginForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (
    { email, password }: UserLogin,
    { resetForm }: FormikHelpers<UserLogin>
  ): void => {
    dispatch(logIn({ email, password }));
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
          <Title>Authorization</Title>
          <Label>
            <Text>
              <FiMail size={20} />
              Email
            </Text>
            <Input
              placeholder="Please enter your email address"
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
              placeholder="Please enter your password"
              type="password"
              name="password"
            />
            <ErrorMessage component={ErrorMessageText} name="password" />
          </Label>
          <SubmitButton type="submit">Log In</SubmitButton>
        </FormBox>
      </Formik>
    </Container>
  );
};

export default LoginForm;
