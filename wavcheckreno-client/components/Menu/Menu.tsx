import * as React from 'react';
import { Grid } from '@material-ui/core';
import { MenuContainer } from 'components/Container';
import { MenuNavLink } from 'components/MenuNavLInk';

// Need to double check this, there might be a better CSS solution to this
export const Menu = (): JSX.Element => {
  return (
    <React.Fragment>
      <Grid xs={4} sm={5} md={5} lg={5} xl={5} item />
      <MenuContainer xs={5} sm={5} md={4} lg={4} xl={4} item>
        <MenuNavLink to="shop" />
        <MenuNavLink to="about" />
        <MenuNavLink to="contact" />
        <MenuNavLink to="subscribe" />
      </MenuContainer>
      <Grid xs={3} sm={2} md={3} lg={2} xl={3} item />
    </React.Fragment>
  );
};
