import * as React from 'react';
import PropTypes from 'prop-types';

interface ProductImageProps {
  imageId: string;
}

export const ProductImage = ({ imageId }: ProductImageProps): JSX.Element => {
  return <div>product image</div>;
};

ProductImage.propTypes = {
  imageId: PropTypes.string.isRequired,
};
