import React, { lazy, Suspense } from 'react';

const LazyImage = ({ src, alt, onClick }) => {
  const ImageComponent = lazy(() => import(src));

  return (
    <Suspense fallback={<div className="fallback">Loading...</div>}>
      <ImageComponent src={src} alt={alt} onClick={onClick} />
    </Suspense>
  );
};

export default LazyImage;
