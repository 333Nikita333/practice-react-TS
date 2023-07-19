import { Form, Field, Formik } from 'formik';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
`;

export const FormikWrapper = styled(Formik)``;

export const Title = styled.h3`
  font-size: 30px;
  color: #560bad;
  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`;

export const FormBox = styled(Form)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 400px;
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;

  background: white;
  border-radius: 30px;

  & label {
    display: flex;
    flex-direction: column;
    width: 100%;

    & span {
      margin-bottom: 5px;

      font-size: 20px;
      text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
        0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
        0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
        0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const InputName = styled(Field)`
  padding: 0 20px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:focus {
    outline: none;
    border: solid 2px #560bad;
  }
`;

export const InputTel = styled(InputName)``;

export const Button = styled.button`
  --color: #560bad;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 8em;
  height: 2.6em;

  font-family: inherit;
  font-size: 17px;
  font-weight: 500;
  line-height: 2.5em;
  border: 2px solid var(--color);
  border-radius: 6px;
  color: var(--color);

  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: color 0.5s;

  &:before {
    content: '';
    height: 150px;
    width: 200px;
    border-radius: 50%;
    background: var(--color);
    position: absolute;
    z-index: -1;
  }
  &:hover {
    color: #fff;
  }
  &:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }
  &:hover:before {
    top: -30px;
    left: -30px;
  }
  &:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
`;

export const Message = styled.p`
  color: red;
`;
