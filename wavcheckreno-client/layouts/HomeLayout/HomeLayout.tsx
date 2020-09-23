import * as React from 'react';
import { Grid } from '@material-ui/core';

interface HomeLayoutProps {
  header: React.ReactChild;
  content: React.ReactChild;
  footer: React.ReactChild;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({
  header,
  content,
  footer,
}): JSX.Element => {
  return (
    <Grid container>
      <Grid justify="center" container>
        {header}
      </Grid>
      {content}
      <Grid xs={4} />
      <Grid xs={4} item>
        {footer}
      </Grid>
      <Grid xs={4} />
    </Grid>
  );
};
