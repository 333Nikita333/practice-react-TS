import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  display: inline-flex;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  margin-bottom: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover span {
    /* Pull the button upwards when hovered */
    transform: translateY(-0.33em);
  }
  &:active span {
    /* Push the button downwards when pressed */
    transform: translateY(0);
  }
`;

export const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 5px 10px;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
`;
