import type { NextPage } from 'next';

import { products } from './data';
import Hero from './Hero';
import ItemCard from './ItemCard';

const Shop: NextPage = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <div className="mt-6" />
      <Hero />

      <div className="flex flex-wrap items-start justify-center gap-6 p-6">
        {products.map((product) => (
          <ItemCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
