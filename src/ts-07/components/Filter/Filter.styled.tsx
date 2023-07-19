import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  & span {
    margin-right: 10px;
    padding: 5px;
    font-size: 20px;
    color: #000;
    background: #98e063;
    border-radius: 15px;
    text-shadow: 3px 5px 2px #474747;
  }
`;

export const InputFilter = styled.input`
  padding: 0 20px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  
  &:focus {
    outline: none;
    border: solid 2px #560bad;
  }
`;