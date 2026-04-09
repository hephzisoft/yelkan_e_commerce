import type { Product, Order, User } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Farm Fresh Chicken',
    description: 'Premium quality, hormone-free chicken sourced directly from local farms. Perfect for all your culinary needs.',
    price: 15.99,
    imageUrl: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=600&auto=format&fit=crop',
    category: 'Poultry',
    stock: 50,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Premium Goat Meat',
    description: 'Tender and flavorful goat meat, ideal for stews and roasting. Pasture-raised for the best quality.',
    price: 24.50,
    imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=600&auto=format&fit=crop',
    category: 'Meat',
    stock: 30,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Free-Range Turkey',
    description: 'Whole free-range turkey, rich in protein and carefully selected for the best dining experience.',
    price: 32.00,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
    category: 'Poultry',
    stock: 20,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Organic Farm Eggs',
    description: 'Fresh organic eggs from free-roaming hens. Rich yolks and high nutritional value.',
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=600&auto=format&fit=crop',
    category: 'Eggs',
    stock: 100,
    rating: 4.6,
  },
];

export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS), 800);
  });
};

export const fetchProductById = async (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS.find(p => p.id === id)), 500);
  });
};

export const fetchUserOrders = async (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        id: 'ORD-001',
        date: '2025-10-14',
        total: 46.50,
        status: 'Delivered',
        items: [
          { product: MOCK_PRODUCTS[1], quantity: 1 },
          { product: MOCK_PRODUCTS[3], quantity: 2 },
        ]
      }
    ]), 600);
  });
};

export const fetchUserProfile = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      id: 'USR-123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      referralCode: 'YELKAN-JD123',
      referralCount: 5,
      referralEarnings: 25.00
    }), 400);
  });
};
