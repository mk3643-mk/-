'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block group">
      <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-[#FFF8F0]">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.images?.[0] || (product as any).imageUrl || 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-[#F5C6D0] text-white text-sm font-extrabold px-3.5 py-1.5 rounded-full shadow-sm">
            {product.category || '케이크'}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-xl text-gray-900 line-clamp-1 group-hover:text-[#D4849E] transition-colors">{product.name}</h3>
          <p className="text-base text-gray-600 line-clamp-2 mt-2 leading-relaxed">{product.description}</p>
          <div className="mt-4 font-black text-[#D4849E] text-xl md:text-2xl">
            {(product.basePrice ?? (product as any).price ?? 0).toLocaleString()}원
          </div>
        </div>
      </div>
    </Link>
  );
}
