import * as React from 'react';
import { Grid, GridListTile } from '@material-ui/core';
import { ProductGridContainer, ProductGridList } from './styles';

interface ProductGridProps {
  category: string;
}

export const ProductGrid = ({ category }: ProductGridProps): JSX.Element => {
  React.useEffect(() => {
    console.log({ category });
  });

  const myArray = [...Array(51).keys()];
  return (
    <Grid container>
      <ProductGridContainer>
        <ProductGridList cellHeight={150} cols={5}>
          {myArray.map((item) => (
            <GridListTile key={item} cols={1}>
              <img src="sample.jpeg" />
            </GridListTile>
          ))}
        </ProductGridList>
      </ProductGridContainer>
    </Grid>
  );
};
