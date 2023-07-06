import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 0 0 20px 0;
  margin-top: 10px;
`;

export const Item = styled.li`
  overflow: hidden;
  border: solid 1px black;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,
      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;
  }
  & a {
    color: #000000;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    & div {
      text-align: center;
      width: 250px;
      height: 460px;

      & span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 376px;
        border-bottom: solid 1px black;

        font-size: 30px;
      }
      & img {
        width: 250px;
        margin-bottom: 5px;
        border-bottom: solid 1px black;
      }
    }

    & b {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      font-size: 16px;
    }
  }

  &:hover > a {
    color: red;
  }
`;

export const Notification = styled.b`
  display: block;
  margin: 20px auto 0;
  font-size: 20px;
  width: 200px;
`;
