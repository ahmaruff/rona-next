import Image from 'next/image';
import type React from 'react';

import type { Product } from './data';

interface ItemCardProps {
  product: Product;
}

const ItemCard: React.FC<ItemCardProps> = ({ product }) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={product.img_url}
          alt="product image"
          width={0}
          height={0}
          sizes="auto"
          className="h-48 w-full object-cover"
        />
        {/* <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="text-left">{product.description}</p>
        <h5 className="text-left">Rp. {product.price}</h5>
        <div className="card-actions justify-end">
          <button type="button" className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
