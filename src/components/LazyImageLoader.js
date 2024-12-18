import React from 'react';
import { Img } from 'react-image';

// Lazy loading and optimized image wrapper
const LazyLoadWrapper = (Component) => {
  return ({ src, alt, ...props }) => (
    <Img
      src={src}
      alt={alt}
      loader={<div>Loading...</div>} // Optionally show a loader
      unloader={<div>Error loading image</div>} // Optionally handle errors
      loading="lazy" // Lazy loading attribute
      {...props}
    />
  );
};

export default LazyLoadWrapper;
