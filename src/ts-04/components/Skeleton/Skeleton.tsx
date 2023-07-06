import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: FC = props => (
  <ContentLoader
    speed={2}
    width={1400}
    height={2000}
    viewBox="0 0 1400 2000"
    backgroundColor="#d9d9d9"
    foregroundColor="#fbfbfb"
    {...props}
  >
    <rect x="20" y="20" rx="0" ry="0" width="250" height="360" />
    <rect x="285" y="20" rx="0" ry="0" width="250" height="360" />
    <rect x="550" y="20" rx="0" ry="0" width="250" height="360" />
    <rect x="815" y="20" rx="0" ry="0" width="250" height="360" />
    <rect x="1080" y="20" rx="0" ry="0" width="250" height="360" />

    <rect x="20" y="395" rx="0" ry="0" width="250" height="360" />
    <rect x="285" y="395" rx="0" ry="0" width="250" height="360" />
    <rect x="550" y="395" rx="0" ry="0" width="250" height="360" />
    <rect x="815" y="395" rx="0" ry="0" width="250" height="360" />
    <rect x="1080" y="395" rx="0" ry="0" width="250" height="360" />

    <rect x="20" y="775" rx="0" ry="0" width="250" height="360" />
    <rect x="285" y="775" rx="0" ry="0" width="250" height="360" />
    <rect x="550" y="775" rx="0" ry="0" width="250" height="360" />
    <rect x="815" y="775" rx="0" ry="0" width="250" height="360" />
    <rect x="1080" y="775" rx="0" ry="0" width="250" height="360" />
    
    <rect x="20" y="1150" rx="0" ry="0" width="250" height="360" />
    <rect x="285" y="1150" rx="0" ry="0" width="250" height="360" />
    <rect x="550" y="1150" rx="0" ry="0" width="250" height="360" />
    <rect x="815" y="1150" rx="0" ry="0" width="250" height="360" />
    <rect x="1080" y="1150" rx="0" ry="0" width="250" height="360" />
    
  </ContentLoader>
);

export default Skeleton;
