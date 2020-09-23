import * as React from 'react';
import { MenuNavLink } from 'components/MenuNavLInk';

export const Home = (): JSX.Element => (
  <React.Fragment>
    <MenuNavLink to="about" />
  </React.Fragment>
);

export default Home;
