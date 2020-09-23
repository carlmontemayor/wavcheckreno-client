import * as React from 'react';
import { Typography } from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';

// TODO: Put interfaces/types in separate file
interface ShopLinkProps {
  category: string;
  selectedCategory: boolean | undefined;
  handleClick: Function;
}

export const ShopLink = ({
  category,
  selectedCategory,
  handleClick,
}: ShopLinkProps): JSX.Element => {
  return (
    <Typography
      onClick={() => {
        handleClick(category);
      }}
      align="left"
      variant="h2"
      color={selectedCategory ? 'primary' : 'textPrimary'}
    >
      {_.capitalize(category)}
    </Typography>
  );
};

ShopLink.propTypes = {
  category: PropTypes.string.isRequired,
  selectedCategory: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
