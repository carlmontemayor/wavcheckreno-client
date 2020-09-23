// Sample requests from Marigold API

export const CategoriesWithFilters = {
  data: [
    {
      all: 'all',
    },
    {
      streetwear: ['all', 'supreme', 'bape', 'conert merch', 'other'],
    },
    {
      vintage: ['all', 'sports', 'music', 'pop culture', 'other'],
    },
    {
      sneakers: ['all', 'air jordan', 'nike', 'adidas', 'other'],
    },
    {
      accessories: ['all', 'hats', 'bags', 'jewelry', 'other'],
    },
    {
      other: 'other',
    },
  ],
};

// GET /products/categories
export const Categories = {
  data: ['all', 'streetwear', 'vintage', 'sneakers', 'accessories', 'other'],
  error: {
    type: 'no items found',
  },
};

// GET /products/all
export const AllWithFilters = {
  data: {
    category: 'all',
    filters: [],
    items: [
      {
        itemName: 'firstItem',
        itemDescription: 'firstItemDescription',
        imageLink: 'sample.jpeg',
      },
      {
        itemName: 'second',
        itemDescription: 'secondItemDescription',
        imageLink: 'sample.jpeg',
      },
      {
        itemName: 'thirdItem',
        itemDescription: 'thirdItemDescription',
        imageLink: 'sample.jpeg',
      },
      {
        itemName: 'fourthItem',
        itemDescription: 'fourthItemDescription',
        imageLink: 'sample.jpeg',
      },
      {
        itemName: 'fifthItem',
        itemDescription: 'fifthItemDescription',
        imageLink: 'sample.jpeg',
      },
      {
        itemName: 'sixthItem',
        itemDescription: 'sixthItemDescription',
        imageLink: 'sample.jpeg',
      },
      {
        itemName: 'seventhItem',
        itemDescription: 'seventhItemDescription',
        imageLink: 'sample.jpeg',
      },
    ],
  },
};

export const StreetwearWithFilters = {
  data: {
    category: 'streetwear',
    filters: ['all', 'supreme', 'bape', 'conert merch', 'other'],
    items: [
      {
        itemName: 'firstItem',
        itemDescription: 'firstItemDescription',
        imageLink: 'sample2.jpeg',
      },
      {
        itemName: 'second',
        itemDescription: 'secondItemDescription',
        imageLink: 'sample2.jpeg',
      },
      {
        itemName: 'thirdItem',
        itemDescription: 'thirdItemDescription',
        imageLink: 'sample2.jpeg',
      },
      {
        itemName: 'fourthItem',
        itemDescription: 'fourthItemDescription',
        imageLink: 'sample2.jpeg',
      },
      {
        itemName: 'fifthItem',
        itemDescription: 'fifthItemDescription',
        imageLink: 'sample2.jpeg',
      },
      {
        itemName: 'sixthItem',
        itemDescription: 'sixthItemDescription',
        imageLink: 'sample2.jpeg',
      },
      {
        itemName: 'seventhItem',
        itemDescription: 'seventhItemDescription',
        imageLink: 'sample2.jpeg',
      },
    ],
  },
};
