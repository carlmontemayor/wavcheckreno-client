import * as React from 'react';
import AppTheme from '../AppTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { CategoryFilter } from 'components/CategoryFilter';
import { ProductGrid } from 'components/ProductGrid';
import { Footer } from 'components/Footer';

export const Shop = (): JSX.Element => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Grid container>
        <Grid xs={2} item />
        <Grid xs={8} item>
          {/*
           *   Make this into a single component before the main <App> component
           */}
          <Paper>
            <Typography color="primary">navigation</Typography>
          </Paper>
        </Grid>
        <Grid xs={2} item />
        <Grid xs={2} item />
        <Grid xs={8} item>
          <CategoryFilter />
        </Grid>
        <Grid xs={2} item />
        <Grid xs={2} item />
        <Grid xs={8} item>
          <ProductGrid category="blah" />
        </Grid>
        <Grid xs={2} item />
        <Grid xs={5} item />
        <Grid xs={2} item>
          <Footer />
        </Grid>
        <Grid xs={5} item />
      </Grid>
    </ThemeProvider>
  );
};

export default Shop;
