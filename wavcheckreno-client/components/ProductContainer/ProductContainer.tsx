import * as React from 'react';
import { AllWithFilters } from 'TestData';

// consider putting this in another folder
interface Products {
  category: string;
  products: Array<object>;
}

// Fetch initial data for "all"
//
export const ProductContainer = (): JSX.Element => {
  const [category, setCategory] = React.useState<string>('');
  const [product, setProducts] = React.useState({});

  React.useState(() => {
    console.table({ AllWithFilters });

    // Retrieve data from API
    setProducts(AllWithFilters.data.filters);
  });

  return <div>heljdsf</div>;
};
