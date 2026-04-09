import type { Product, Order, User } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Organic Plantain Flour',
    description: 'High-quality organic plantain flour, perfect for healthy meals.',
    price: 15.99,
    imageUrl: 'https://images.unsplash.com/photo-1596647285640-3f41261d763a?q=80&w=600&auto=format&fit=crop',
    category: 'Flour',
    stock: 50,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Premium Palm Oil',
    description: 'Rich, authentic red palm oil extracted traditionally for the best flavor.',
    price: 24.50,
    imageUrl: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=600&auto=format&fit=crop',
    category: 'Oils',
    stock: 30,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Smoked Catfish',
    description: 'Traditionally smoked catfish, adding genuine flavor to soups and stews.',
    price: 32.00,
    imageUrl: 'https://images.unsplash.com/photo-1615486171448-4fdcd4121bdf?q=80&w=600&auto=format&fit=crop',
    category: 'Seafood',
    stock: 20,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Garri (Cassava Flakes)',
    description: 'Crunchy and sour garri from the finest cassava fields.',
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1518115629437-0cfc74add249?q=80&w=600&auto=format&fit=crop',
    category: 'Grains',
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
