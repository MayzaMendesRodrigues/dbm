import '@testing-library/jest-dom';

const mockData = {
  products: [
    {
      images: [{ id: 1, primary: true, url: 'test.jpg' }],
      product: {
        brand: 'Honda',
        model: 'CB 500',
        year: 2022,
        mileage: 5000,
        cylinder: 500,
        type: 'Naked'
      },
      salePrice: 1000000
    }
  ],
  reviews: [
    {
      reviewer_name: 'John Doe',
      text: 'Great service!',
      rating: 5,
      published_at: Math.floor(Date.now() / 1000) - 86400,
      reviewer_picture_url: 'john.jpg',
      images: [],
      title: 'Review'
    }
  ]
};

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockData),
  })
);

// Mock localStorage
const localStorageMock = (function() {
  let store: Record<string, string> = {};
  return {
    getItem: function(key: string) {
      return store[key] || null;
    },
    setItem: function(key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
