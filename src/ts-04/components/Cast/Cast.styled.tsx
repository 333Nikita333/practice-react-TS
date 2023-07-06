import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    width: 200px;
    padding: 5px;
    border: solid 1px black;
    border-radius: 35px;
    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,
      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;

    & img {
      margin-right: auto;
      margin-left: auto;
    }
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 150px;
      border: solid 0.5px black;
      background-color: grey;
    }
    & p {
      padding: 5px;
      text-align: center;
      font-size: 16px;
      height: 60px;
    }

    & b {
      text-align: center;
      font-size: 16px;
    }
  }
`;
