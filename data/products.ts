export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  stock: number;
  category: 'tshirt' | 'hoodie';
  images: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 'oversize-heavy-tshirt-black',
    name: 'Oversize Heavy T-Shirt',
    description: 'Premium heavyweight cotton with an oversized silhouette. Crafted for those who demand quality and comfort in equal measure.',
    price: 55.00,
    color: 'Black',
    stock: 104,
    category: 'tshirt',
    images: [
      '/images/products/BlackT1.jpeg',
      '/images/products/BlackT2.jpeg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'oversize-heavy-tshirt-white',
    name: 'Oversize Heavy T-Shirt',
    description: 'Premium heavyweight cotton with an oversized silhouette. Crafted for those who demand quality and comfort in equal measure.',
    price: 55.00,
    color: 'White',
    stock: 98,
    category: 'tshirt',
    images: [
      '/images/products/whiteT1.jpeg',
      '/images/products/WhiteT2.jpeg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'oversize-basic-hoodie-black',
    name: 'Oversize Basic Hoodie',
    description: 'Essential heavyweight fleece hoodie with a contemporary oversized fit. Designed for elevated everyday wear.',
    price: 110.00,
    color: 'Black',
    stock: 74,
    category: 'hoodie',
    images: [
      '/images/products/BlackH1.jpeg',
      '/images/products/BlackH2.jpeg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'oversize-basic-hoodie-white',
    name: 'Oversize Basic Hoodie',
    description: 'Essential heavyweight fleece hoodie with a contemporary oversized fit. Designed for elevated everyday wear.',
    price: 110.00,
    color: 'White',
    stock: 82,
    category: 'hoodie',
    images: [
      '/images/products/WhiteH1.jpeg',
      '/images/products/WhiteH2.jpeg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
];
