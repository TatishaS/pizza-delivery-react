import React from 'react';

import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="191" y="447" rx="0" ry="0" width="9" height="1" />
      <circle cx="130" cy="130" r="120" />
      <rect x="0" y="316" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="419" rx="6" ry="6" width="103" height="35" />
      <rect x="143" y="415" rx="20" ry="20" width="135" height="45" />
      <rect x="0" y="273" rx="8" ry="8" width="280" height="33" />
    </ContentLoader>
  );
}

export default LoadingBlock;
