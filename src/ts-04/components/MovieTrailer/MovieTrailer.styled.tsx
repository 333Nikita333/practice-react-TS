import ReactPlayer from 'react-player'
import styled from 'styled-components';

export const MovieTrailerBox = styled.div`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

export const Trailer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
