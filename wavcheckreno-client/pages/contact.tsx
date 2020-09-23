import * as React from 'react';
import Link from 'next/Link';

export const Contact = (): JSX.Element => (
  <div>
    Welocome to Contact
    <Link href="/home">
      <a>home</a>
    </Link>
  </div>
);

export default Contact;
