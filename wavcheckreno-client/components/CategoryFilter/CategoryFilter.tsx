import * as React from 'react';
import { Typography, Grid } from '@material-ui/core';
import _ from 'lodash';
import { Categories } from 'TestData';
import { isFirstInMap } from 'utils';
import { ShopLink } from 'components/ShopLink';
import { useRouter } from 'next/router';

// TODO: Incorporate URL changes when clicked
// TODO: Consider using the useMemo() hook? These values may be modified a lot
export const CategoryFilter = (): JSX.Element => {
  const [categories, setCategories] = React.useState<Map<string, boolean>>(
    new Map()
  );
  const router = useRouter();

  // TODO: Consider converting to enum
  const [showLoading, setShowLoading] = React.useState(false);

  // class components componentDidMount() => on first render
  React.useEffect(() => {
    let timer1 = setTimeout(() => setShowLoading(true), 1000);
    var categoryMap = new Map();
    Categories.data.forEach((category, index) => {
      isFirstInMap(index)
        ? categoryMap.set(category, true)
        : categoryMap.set(category, false);
    });
    setCategories(categoryMap);
    // actually fetch items from backend

    // Shallow route don't re-render
    router.push('shop', undefined, { shallow: true });

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  // works with async, but make sure to await the result after recieving backend response
  const handleClick = async (selectedCategory: string) => {
    var modifiedCategoryMap = new Map(categories);

    // _ here to indicate that the argument is needed to get access
    // to the key only (due to positional arguments)
    modifiedCategoryMap.forEach((_category, key) => {
      modifiedCategoryMap.set(key, false);
    });
    modifiedCategoryMap.set(selectedCategory, true);
    setCategories(modifiedCategoryMap);

    // Modify the prop
  };

  // TODO: Change loading symbol... ask Jul what would look best
  return showLoading === false ? (
    <Typography>Loading...</Typography>
  ) : (
    <Grid justify="space-between" container>
      {[...categories.keys()].map((category) => (
        <Grid key={category} item>
          <ShopLink
            category={category}
            selectedCategory={categories.get(category)}
            handleClick={handleClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};
