import { FC } from 'react';
import { Puff } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader: FC = () => {
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
