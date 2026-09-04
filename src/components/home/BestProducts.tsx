'use client';

import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function BestProducts() {
  const bestProducts = products.slice(0, 4);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3D3D3D]">베스트 꽃케이크</h2>
        <div className="w-20 h-1.5 bg-[#E8A0B5] mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-14 text-center">
        <Link 
          href="/products" 
          className="inline-block border-2 border-[#D4849E] text-[#D4849E] font-bold text-lg md:text-xl rounded-full px-10 py-4 transition-all hover:bg-[#D4849E] hover:text-white shadow-sm hover:shadow-md"
        >
          모든 상품 보기 →
        </Link>
      </div>
    </section>
  );
}
