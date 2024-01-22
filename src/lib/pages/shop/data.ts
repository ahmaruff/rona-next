export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  img_url: string;
}

const url = 'https://picsum.photos/300/400';

export const products: Product[] = [
  {
    id: 1,
    title: 'Paket Wisuda',
    description: 'Paket Wisuda murah 1 hari full',
    img_url: url,
    price: 350000,
  },
  {
    id: 2,
    title: 'Paket Wisuda 2',
    description: 'Paket Wisuda murah 1/2 hari',
    img_url: url,
    price: 100000,
  },
  {
    id: 3,
    title: 'Paket Wisuda 3',
    description: 'Paket Wisuda murah 1/3 hari',
    img_url: url,
    price: 50000,
  },
  {
    id: 1,
    title: 'Paket Wisuda 4',
    description: 'Paket Wisuda murah 2 hari full',
    img_url: url,
    price: 350000,
  },
  {
    id: 2,
    title: 'Paket Wisuda 5',
    description: 'Paket Wisuda murah 3 hari',
    img_url: url,
    price: 100000,
  },
  {
    id: 3,
    title: 'Paket Wisuda 6',
    description: 'Paket Wisuda murah 5 hari',
    img_url: url,
    price: 50000,
  },
  {
    id: 1,
    title: 'Paket Wisuda 7',
    description: 'Paket Wisuda murah 4 hari full',
    img_url: url,
    price: 350000,
  },
  {
    id: 2,
    title: 'Paket Wisuda 8',
    description: 'Paket Wisuda murah 7 hari',
    img_url: url,
    price: 100000,
  },
];
