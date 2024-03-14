import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="139" cy="125" r="120" />
    <rect x="0" y="265" rx="10" ry="10" width="280" height="27" />
    <rect x="131" y="420" rx="22" ry="22" width="150" height="45" />
    <rect x="0" y="320" rx="10" ry="10" width="280" height="82" />
    <rect x="0" y="420" rx="10" ry="10" width="90" height="45" />
  </ContentLoader>
);

export default Skeleton;
