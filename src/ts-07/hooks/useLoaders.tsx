import { Puff } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderBox = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 113%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const useLoaders = () => {
  const LoaderBig = () => {
    return (
      <LoaderBox>
        <Puff
          height="150"
          width="150"
          radius={1}
          color="#560bad"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </LoaderBox>
    );
  };

  return { LoaderBig };
};
