import React from 'react';

export default function CommonComponentHOC(WrappedComponent) {
  const CommonComponentHOCInner = props => (
    <WrappedComponent
      {...props}
    />
  );
  return (CommonComponentHOCInner);
}
