import * as React from 'react';
import Link from 'next/Link';

export const About = (): JSX.Element => (
  <div>
    Welocome to About
    <Link href="/home">
      <a>home</a>
    </Link>
  </div>
);

export default About;
