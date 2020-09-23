import * as React from 'react';
import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { isShopping } from 'utils';

// TODO: Simplify logic for mobile or desktop and whether we are on shopping or not
//       Modify variant
export const Footer = (): JSX.Element => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Typography
      align="center"
      variant="h6"
      color={isShopping(router.pathname) ? 'textPrimary' : 'textSecondary'}
    >
      &copy; Wavcheck
    </Typography>
  );
};
