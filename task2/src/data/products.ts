export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality Bluetooth headphones with noise cancellation',
    price: 199.99,
    category: 'Electronics',
    image: 'https://i.pinimg.com/736x/a4/f5/f9/a4f5f925a601aeda50c76f4aeb66f4f7.jpg',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor',
    price: 299.99,
    category: 'Electronics',
    image: 'https://i.pinimg.com/1200x/f4/7f/5b/f47f5b3251998527c027830980409518.jpg',
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole',
    price: 129.99,
    category: 'Sports',
    image: 'https://i.pinimg.com/1200x/87/2c/44/872c4487bfb63dfc20d7ecbfcf498d36.jpg',
  },
  {
    id: '4',
    name: 'Coffee Maker',
    description: 'Automatic drip coffee maker with timer',
    price: 79.99,
    category: 'Home',
    image: 'https://i.pinimg.com/736x/df/b8/00/dfb800546bb5f345253882236850e9ff.jpg',
  },
  {
    id: '5',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand',
    price: 49.99,
    category: 'Office',
    image: 'https://i.pinimg.com/1200x/b1/19/4e/b1194e6d2576d3b36b44e28b5e419799.jpg',
  },
];