import * as React from 'react';
import { Footer } from 'components/Footer';
import { Logo } from 'components/Logo';
import { HomeLayout } from 'layouts/HomeLayout';
import { Menu } from 'components/Menu';

export const HomeMenu = (): JSX.Element => (
  <HomeLayout
    header={<Logo src="/logo.svg" alt="Wavcheck Reno" />}
    content={<Menu />}
    footer={<Footer />}
  />
);

export default HomeMenu;
