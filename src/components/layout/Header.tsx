'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Menu, X, Search, User, ShoppingBag, Camera, Phone } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#F5C6D0]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-22 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 flex-shrink-0 transition-transform group-hover:scale-105">
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
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-[300px] bg-[#FFF8F0] shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E8A0B5]/30">
              <span className="font-extrabold text-xl text-[#3D3D3D]">전체 메뉴</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#3D3D3D] hover:text-[#D4849E] p-1"
              >
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-[#3D3D3D] font-bold text-xl hover:text-[#D4849E] transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto border-t border-[#E8A0B5]/30 pt-6">
              <div className="flex gap-6 text-[#3D3D3D]">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#D4849E] flex items-center gap-2 text-sm font-medium">
                  <Camera size={22} /> 인스타그램
                </a>
                <a href="tel:02-1234-5678" className="hover:text-[#D4849E] flex items-center gap-2 text-sm font-medium">
                  <Phone size={22} /> 전화문의
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
