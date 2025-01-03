import React from 'react';

const ImageComponent = ({ src, alt, onClick }) => (
  <img src={src} alt={alt} onClick={onClick} />
);

export default ImageComponent;