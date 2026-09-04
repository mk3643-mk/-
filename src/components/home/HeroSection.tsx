'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[65vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FFE0E8] to-[#F5C6D0]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}} />
      
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-36 h-36 rounded-full bg-white/50 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-52 h-52 rounded-full bg-[#E8A0B5]/50 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-6 lg:space-y-10 py-12 lg:py-16">
        {/* Large Character Logo */}
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[440px] lg:h-[440px] animate-[float_6s_ease-in-out_infinite] filter drop-shadow-xl">
          <Image
            src="/logo.png"
            alt="꽃곰케이크 로고"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#3D3D3D] leading-tight tracking-tight">
            특별한 날을 <br className="sm:hidden" />꽃으로 물들이다
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#5A5A5A]">
            100% 수제 플라워 케이크 · 예약 주문 전문
          </p>
        </div>
        
        <Link 
          href="/products" 
          className="inline-block mt-4 bg-gradient-to-r from-[#E8A0B5] to-[#D4849E] text-white text-xl md:text-2xl font-bold rounded-full px-12 py-5 transition-transform duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          케이크 구경하기 →
        </Link>
      </div>
    </section>
  );
}
