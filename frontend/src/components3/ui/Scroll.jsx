

import React from 'react';

const ScrollArea = ({ className, children }) => {
  return (
    <div className={`overflow-auto ${className}`} style={{ maxHeight: '100%' }}>
      {children}
    </div>
  );
};

export default ScrollArea;
