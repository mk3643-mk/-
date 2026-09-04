import HeroSection from '@/components/home/HeroSection';
import BestProducts from '@/components/home/BestProducts';
import FeatureSection from '@/components/home/FeatureSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      
      <div className="py-20">
        <BestProducts />
      </div>
      
      <div className="py-8">
        <FeatureSection />
      </div>
      
      {/* Final CTA Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3D3D3D] mb-6">
            Special order? 커스텀 주문도 가능해요!
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-10 break-keep leading-relaxed">
            원하시는 디자인, 색상, 맛으로 나만의 특별한 케이크를 정성스럽게 만들어 드립니다.
          </p>
          <Link 
            href="/custom-order"
            className="inline-block bg-[#D4849E] text-white font-bold text-lg md:text-xl rounded-full px-10 py-4 transition-transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            커스텀 주문 상담하기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
