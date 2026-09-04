'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Flower2 } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const totalItemsPrice = items.reduce((acc, item) => acc + ((item.totalPrice || item.basePrice || 0) * item.quantity), 0);
  const deliveryFee = items.some(item => item.deliveryType === '배달' || item.deliveryType === ('quick' as any)) ? 5000 : 0;
  const totalPrice = totalItemsPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FFF8F0]/30">
        <Flower2 className="w-16 h-16 text-[#F5C6D0] mb-6" />
        <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4">장바구니가 비어있어요</h2>
        <p className="text-gray-500 mb-8">예쁜 꽃곰케이크를 둘러보세요!</p>
        <Link 
          href="/products" 
          className="px-8 py-3 bg-[#E8A0B5] text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all hover:bg-[#D4849E]"
        >
          상품 보러가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-[#3D3D3D] mb-12 border-b border-[#F5C6D0]/50 pb-6">장바구니</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="flex-1 space-y-6">
          {items.map((item, index) => {
            const itemPrice = item.totalPrice || item.basePrice || 0;
            const imgSrc = item.images?.[0] || (item as any).image || 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600';
            const sizeName = item.selectedSize?.name || (item as any).options?.size || '기본';
            const flavorName = item.selectedFlavor?.name || (item as any).options?.flavor || '기본';
            const letteringText = item.lettering || (item as any).options?.lettering;
            const pickupDateText = item.pickupDate || (item as any).options?.date;
            const pickupTimeText = item.pickupTime || (item as any).options?.time;

            return (
              <div key={index} className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl shadow-sm border border-[#FFF8F0]">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-[#FEF3E8]">
                  <Image 
                    src={imgSrc} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-[#3D3D3D]">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-500 space-y-1 mb-4 flex-1">
                    <p>옵션: {sizeName} / {flavorName}</p>
                    {letteringText && <p>문구: {letteringText}</p>}
                    {pickupDateText && (
                      <p className="text-[#A67BB7]">
                        수령: {pickupDateText} {pickupTimeText} ({item.deliveryType === '배달' ? '퀵배송' : '매장픽업'})
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 text-gray-600 hover:bg-[#FFF8F0] rounded-l-lg transition-colors"
                      >-</button>
                      <span className="px-3 py-1 text-sm font-medium w-10 text-center border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-[#FFF8F0] rounded-r-lg transition-colors"
                      >+</button>
                    </div>
                    <span className="font-bold text-[#D4849E] text-lg">
                      {(itemPrice * item.quantity).toLocaleString()}원
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-96">
          <div className="bg-[#FFF8F0]/50 rounded-3xl p-6 lg:p-8 lg:sticky lg:top-24 border border-[#F5C6D0]/30">
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-6">결제 정보</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>총 상품 금액</span>
                <span>{totalItemsPrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>배송비 (퀵배송)</span>
                <span>{deliveryFee === 0 ? '무료 (픽업)' : `${deliveryFee.toLocaleString()}원`}</span>
              </div>
            </div>
            
            <div className="border-t border-[#F5C6D0]/50 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="font-bold text-[#3D3D3D]">총 결제 금액</span>
                <span className="text-3xl font-bold text-[#D4849E]">{totalPrice.toLocaleString()}원</span>
              </div>
            </div>
            
            <button 
              onClick={() => alert('주문이 접수되었습니다! (테스트 주문)')}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F5C6D0] to-[#E8A0B5] text-white font-bold text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
