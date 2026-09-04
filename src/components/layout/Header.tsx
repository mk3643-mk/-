'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Menu, X, Search, User, ShoppingBag, Camera, Phone, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { name: '홈', href: '/' },
    { name: '케이크 라인업', href: '/products' },
    { name: '커스텀 주문', href: '/custom-order' },
    { name: '브랜드 소개', href: '/about' },
    { name: '리뷰', href: '/reviews' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F5C6D0]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="꽃곰케이크 로고" 
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[#3D3D3D] font-black text-2xl md:text-3xl tracking-tight group-hover:text-[#D4849E] transition-colors">
            꽃곰케이크
          </span>
        </Link>

        {/* Center: Desktop Nav (Larger Font & Bold) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[#3D3D3D] text-lg font-bold hover:text-[#D4849E] transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4849E] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Icons (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-5 text-[#3D3D3D]">
          <button className="hidden lg:block hover:text-[#D4849E] transition-colors p-1" title="검색">
            <Search size={26} />
          </button>
          <Link href="/mypage" className="hidden lg:block hover:text-[#D4849E] transition-colors p-1" title="마이페이지">
            <User size={26} />
          </Link>
          <Link href="/cart" className="relative hover:text-[#D4849E] transition-colors p-1" title="장바구니">
            <ShoppingBag size={26} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4849E] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            className="lg:hidden hover:text-[#D4849E] transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="메뉴 열기"
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Strictly Opaque z-[100]) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer Panel - Solid White Opaque Container */}
          <div className="relative w-[320px] max-w-[85vw] h-full bg-white shadow-2xl p-6 flex flex-col z-[101] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center pb-5 mb-6 border-b-2 border-[#F5C6D0]/40">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image src="/logo.png" alt="로고" fill className="object-contain" />
                </div>
                <span className="font-black text-xl text-[#3D3D3D]">전체 메뉴</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#3D3D3D] hover:text-[#D4849E] p-2 bg-[#FFF8F0] rounded-full transition-colors"
                aria-label="메뉴 닫기"
              >
                <X size={26} />
              </button>
            </div>
            
            {/* Menu Links with High-contrast Cards */}
            <nav className="flex flex-col gap-3 flex-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="flex items-center justify-between text-[#3D3D3D] font-extrabold text-xl px-5 py-4 bg-[#FFF8F0] hover:bg-[#FFE0E8] active:bg-[#F5C6D0]/40 rounded-2xl border border-[#F5C6D0]/40 transition-all shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={22} className="text-[#D4849E]" />
                </Link>
              ))}
            </nav>
            
            {/* Footer SNS & Contact buttons */}
            <div className="mt-8 pt-6 border-t-2 border-[#F5C6D0]/40 space-y-3">
              <p className="text-xs font-bold text-gray-400 mb-2">고객센터 & SNS</p>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 px-4 py-3.5 bg-gray-50 hover:bg-[#FFF8F0] rounded-xl border border-gray-200 text-gray-800 font-bold text-base transition-colors"
              >
                <Camera size={22} className="text-[#D4849E]" />
                <span>인스타그램 방문하기</span>
              </a>
              <a 
                href="tel:02-1234-5678" 
                className="flex items-center gap-3 px-4 py-3.5 bg-[#E8A0B5]/10 hover:bg-[#E8A0B5]/20 rounded-xl border border-[#E8A0B5]/40 text-[#D4849E] font-extrabold text-base transition-colors"
              >
                <Phone size={22} />
                <span>전화 문의 (02-1234-5678)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
