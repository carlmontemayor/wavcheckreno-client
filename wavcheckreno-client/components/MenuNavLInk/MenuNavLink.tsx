import Link from 'next/Link';
import { Typography } from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';

// add cursor pointer

interface MenuNavLinkProps {
  to: string;
}

export const MenuNavLink = ({ to }: MenuNavLinkProps): JSX.Element => {
  return (
    <Link href={to}>
      <Typography align="left" variant="h2" color="textSecondary">
        <a>{_.capitalize(to)}</a>
      </Typography>
    </Link>
  );
};

MenuNavLink.propTypes = {
  to: PropTypes.string.isRequired,
};
