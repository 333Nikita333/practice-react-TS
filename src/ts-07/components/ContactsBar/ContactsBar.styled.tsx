import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  text-align: center;
  height: 100vh;

  & h1,
  h2 {
    color: #560bad;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const Text = styled.h2`
  font-size: 30px;
`;

export const Message = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
`;
