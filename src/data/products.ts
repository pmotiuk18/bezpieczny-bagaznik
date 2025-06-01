export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
    price: 199.99,
    imageUrl: "https://placehold.co/300x300/png?text=Headphones"
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with high-resolution camera and fast processor.",
    price: 799.99,
    imageUrl: "https://placehold.co/300x300/png?text=Smartphone"
  },
  {
    id: 3,
    name: "Laptop",
    description: "Lightweight laptop with powerful performance for work and entertainment.",
    price: 1299.99,
    imageUrl: "https://placehold.co/300x300/png?text=Laptop"
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Fitness tracking smartwatch with heart rate monitor and GPS.",
    price: 249.99,
    imageUrl: "https://placehold.co/300x300/png?text=Smartwatch"
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    description: "Compact wireless earbuds with charging case and water resistance.",
    price: 129.99,
    imageUrl: "https://placehold.co/300x300/png?text=Earbuds"
  },
  {
    id: 6,
    name: "Tablet",
    description: "High-resolution tablet with stylus support for creative work.",
    price: 499.99,
    imageUrl: "https://placehold.co/300x300/png?text=Tablet"
  }
];