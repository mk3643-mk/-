'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useParams, useRouter } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);

  // Form states
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [lettering, setLettering] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [deliveryType, setDeliveryType] = useState('pickup');
  const [address, setAddress] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');

  useEffect(() => {
    if (params.id) {
      const p = getProductById(params.id as string);
      if (p) {
        setProduct(p);
        if (p.options?.sizes?.length > 0) setSelectedSize(p.options.sizes[0].name);
        if (p.options?.flavors?.length > 0) setSelectedFlavor(p.options.flavors[0].name);
      }
    }
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4">상품을 찾을 수 없습니다.</h2>
          <button onClick={() => router.push('/products')} className="text-[#D4849E] underline">
            상품 목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // Calculate total price
  const basePrice = product.basePrice ?? product.price ?? 0;
  const sizeObj = product.options?.sizes?.find((s: any) => s.name === selectedSize);
  const flavorObj = product.options?.flavors?.find((f: any) => f.name === selectedFlavor);
  const sizePrice = sizeObj?.additionalPrice ?? sizeObj?.price ?? 0;
  const flavorPrice = flavorObj?.additionalPrice ?? flavorObj?.price ?? 0;
  const totalPrice = basePrice + sizePrice + flavorPrice;

  // Min date (3 days from today)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 3);
  const minDateStr = minDate.toISOString().split('T')[0];

  const handleAddToCart = () => {
    if (!pickupDate || !pickupTime || !buyerName || !buyerPhone) {
      alert('필수 입력 항목을 모두 작성해주세요.');
      return;
    }

    if (deliveryType === 'quick' && !address) {
      alert('배송받으실 주소를 입력해주세요.');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      basePrice: basePrice,
      images: product.images || [product.image],
      category: product.category,
      isAvailable: true,
      options: product.options,
      selectedSize: sizeObj || { name: selectedSize, additionalPrice: sizePrice },
      selectedFlavor: flavorObj || { name: selectedFlavor, additionalPrice: flavorPrice },
      lettering: lettering,
      pickupDate: pickupDate,
      pickupTime: pickupTime,
      deliveryType: deliveryType === 'quick' ? '배달' : '픽업',
      address: address,
      quantity: 1,
      totalPrice: totalPrice,
    });

    alert('장바구니에 담겼습니다.');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 pb-32 lg:pb-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Product Image */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FEF3E8]">
          <Image 
            src={product.images?.[0] || product.image || 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600'} 
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-w-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: Sticky Sidebar Options */}
        <div className="lg:sticky lg:top-24 h-fit space-y-8">
          <div className="border-b border-[#F5C6D0]/30 pb-6">
            <p className="text-sm text-[#A67BB7] font-medium mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold text-[#3D3D3D] mb-4">{product.name}</h1>
            <p className="text-[#3D3D3D] opacity-80 mb-6">{product.description}</p>
            <p className="text-2xl font-bold text-[#D4849E]">
              {basePrice.toLocaleString()}원~
            </p>
          </div>

          <div className="space-y-6">
            {/* Sizes */}
            <div>
              <label className="block text-sm font-semibold text-[#3D3D3D] mb-3">케이크 사이즈</label>
              <div className="flex flex-wrap gap-3">
                {product.options?.sizes?.map((size: any) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`px-4 py-2 rounded-xl border text-sm transition-all ${
                      selectedSize === size.name
                        ? 'border-[#E8A0B5] bg-[#E8A0B5]/10 text-[#D4849E] font-bold'
                        : 'border-gray-200 text-gray-600 hover:border-[#F5C6D0]'
                    }`}
                  >
                    {size.name} {(size.additionalPrice ?? size.price ?? 0) > 0 && `(+${(size.additionalPrice ?? size.price ?? 0).toLocaleString()}원)`}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavors */}
            <div>
              <label className="block text-sm font-semibold text-[#3D3D3D] mb-3">맛/시트 선택</label>
              <div className="flex flex-wrap gap-3">
                {product.options?.flavors?.map((flavor: any) => (
                  <button
                    key={flavor.name}
                    onClick={() => setSelectedFlavor(flavor.name)}
                    className={`px-4 py-2 rounded-xl border text-sm transition-all ${
                      selectedFlavor === flavor.name
                        ? 'border-[#E8A0B5] bg-[#E8A0B5]/10 text-[#D4849E] font-bold'
                        : 'border-gray-200 text-gray-600 hover:border-[#F5C6D0]'
                    }`}
                  >
                    {flavor.name} {(flavor.additionalPrice ?? flavor.price ?? 0) > 0 && `(+${(flavor.additionalPrice ?? flavor.price ?? 0).toLocaleString()}원)`}
                  </button>
                ))}
              </div>
            </div>

            {/* Lettering */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-[#3D3D3D]">레터링 문구 (선택)</label>
                <span className="text-xs text-gray-400">{lettering.length}/20</span>
              </div>
              <input 
                type="text" 
                maxLength={20}
                value={lettering}
                onChange={(e) => setLettering(e.target.value)}
                placeholder="케이크 하판에 적을 문구를 입력해주세요"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8A0B5] focus:ring-1 focus:ring-[#E8A0B5] outline-none transition-all"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2">수령 날짜</label>
                <input 
                  type="date"
                  min={minDateStr}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8A0B5] focus:ring-1 focus:ring-[#E8A0B5] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2">희망 시간</label>
                <select 
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8A0B5] focus:ring-1 focus:ring-[#E8A0B5] outline-none transition-all"
                >
                  <option value="">선택</option>
                  {Array.from({length: 21}).map((_, i) => {
                    const hour = Math.floor(i / 2) + 9;
                    const min = i % 2 === 0 ? '00' : '30';
                    const time = `${hour.toString().padStart(2, '0')}:${min}`;
                    return <option key={time} value={time}>{time}</option>;
                  })}
                </select>
              </div>
            </div>

            {/* Delivery Type */}
            <div>
              <label className="block text-sm font-semibold text-[#3D3D3D] mb-3">수령 방식</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="delivery" 
                    value="pickup"
                    checked={deliveryType === 'pickup'}
                    onChange={(e) => setDeliveryType(e.target.value)}
                    className="text-[#E8A0B5] focus:ring-[#E8A0B5]"
                  />
                  <span className="text-sm text-gray-700">매장 픽업</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="delivery" 
                    value="quick"
                    checked={deliveryType === 'quick'}
                    onChange={(e) => setDeliveryType(e.target.value)}
                    className="text-[#E8A0B5] focus:ring-[#E8A0B5]"
                  />
                  <span className="text-sm text-gray-700">퀵 배송 (착불)</span>
                </label>
              </div>
            </div>

            {/* Address if quick delivery */}
            {deliveryType === 'quick' && (
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2">배송 주소</label>
                <textarea 
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="상세 주소를 입력해주세요"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8A0B5] focus:ring-1 focus:ring-[#E8A0B5] outline-none transition-all resize-none"
                />
              </div>
            )}

            {/* Buyer Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2">예약자명</label>
                <input 
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8A0B5] focus:ring-1 focus:ring-[#E8A0B5] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2">연락처</label>
                <input 
                  type="tel"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8A0B5] focus:ring-1 focus:ring-[#E8A0B5] outline-none transition-all"
                />
              </div>
            </div>
          </div>
          
          {/* PC Buttons */}
          <div className="hidden lg:block pt-8 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-[#3D3D3D]">총 상품 금액</span>
              <span className="text-3xl font-bold text-[#D4849E]">{totalPrice.toLocaleString()}원</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleAddToCart}
                className="py-4 rounded-xl border-2 border-[#E8A0B5] text-[#D4849E] font-bold text-lg hover:bg-[#FFF8F0] transition-colors"
              >
                장바구니 담기
              </button>
              <button 
                onClick={handleBuyNow}
                className="py-4 rounded-xl bg-gradient-to-r from-[#F5C6D0] to-[#E8A0B5] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                바로 주문하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="fixed lg:hidden bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-between items-center mb-3 px-2">
          <span className="text-sm font-bold text-[#3D3D3D]">총 금액</span>
          <span className="text-xl font-bold text-[#D4849E]">{totalPrice.toLocaleString()}원</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={handleAddToCart}
            className="py-3 rounded-xl border border-[#E8A0B5] text-[#D4849E] font-bold text-sm bg-white"
          >
            장바구니 담기
          </button>
          <button 
            onClick={handleBuyNow}
            className="py-3 rounded-xl bg-gradient-to-r from-[#F5C6D0] to-[#E8A0B5] text-white font-bold text-sm shadow-md"
          >
            바로 주문하기
          </button>
        </div>
      </div>
    </div>
  );
}
