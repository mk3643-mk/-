'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const categories = ['전체', '생화케이크', '앙금플라워', '버터크림', '떡케이크'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredProducts = activeCategory === '전체' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4 relative inline-block">
          케이크 라인업
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#F5C6D0]/50 rounded-full"></div>
        </h1>
        <p className="text-gray-500 mt-4">특별한 날을 더욱 특별하게 만들어줄 꽃곰의 케이크</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-[#E8A0B5] text-white shadow-md'
                : 'bg-[#FFF8F0] text-gray-600 hover:bg-[#F5C6D0]/30'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">해당 카테고리의 상품이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
