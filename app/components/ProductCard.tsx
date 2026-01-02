'use client';

import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/app/contexts/CartContext';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert(t('pleaseSelectSize'));
      return;
    }

    addToCart(product, selectedSize);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const secondaryImageIndex = mainImageIndex === 0 ? 1 : 0;

  return (
    <div className="group">
      {/* Asymmetric Layout - Alternating */}
      <div className={`grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4`}>
        {/* Main Image (Left/Large) */}
        <div
          className={`${
            index % 2 === 0 ? 'sm:col-span-3' : 'sm:col-span-3 sm:order-2'
          } aspect-[3/4] bg-gray-100 overflow-hidden`}
        >
          <img
            src={product.images[mainImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Secondary Image (Right/Small) - Clickable */}
        <div
          className={`${
            index % 2 === 0 ? 'sm:col-span-2' : 'sm:col-span-2 sm:order-1'
          } aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer transition-all duration-300 active:opacity-60 hover:opacity-75 touch-manipulation`}
          onClick={() => setMainImageIndex(secondaryImageIndex)}
        >
          <img
            src={product.images[secondaryImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-6 md:mt-8">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl md:text-2xl font-light mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              {product.color}
            </p>
          </div>
          <p className="text-xl md:text-2xl font-light">€{product.price.toFixed(2)}</p>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

        {/* Stock Badge */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs uppercase tracking-wider text-gray-500">
            {product.stock} {t('unitsAvailable')}
          </span>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
            {t('selectSize')}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[44px] h-11 md:w-12 md:h-12 px-3 border transition-all duration-200 text-sm uppercase touch-manipulation ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 hover:border-black active:border-black active:bg-black active:text-white md:hover:bg-black md:hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={`w-full transition-all duration-300 touch-manipulation active:scale-95 ${
            showSuccess
              ? 'bg-green-600 text-white px-8 py-3 md:py-4 text-sm uppercase tracking-wider font-medium'
              : 'btn-primary'
          }`}
        >
          {showSuccess ? t('addedToCart') : t('addToCart')}
        </button>
      </div>
    </div>
  );
}
