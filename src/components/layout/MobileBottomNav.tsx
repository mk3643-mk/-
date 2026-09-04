'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  
  // Safe fallback if CartContext isn't available
  const { totalItems } = useCart();

  const navItems = [
    { name: '홈', href: '/', icon: Home },
    { name: '검색', href: '/search', icon: Search },
    { name: '장바구니', href: '/cart', icon: ShoppingBag, hasBadge: true },
    { name: 'MY', href: '/mypage', icon: User },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-[60px]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full relative"
            >
              <div className={`relative ${isActive ? 'text-[#D4849E]' : 'text-[#3D3D3D]'}`}>
                <Icon size={24} className="mb-1" />
                {item.hasBadge && totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-[#D4849E] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className={`text-[10px] ${isActive ? 'text-[#D4849E] font-bold' : 'text-[#3D3D3D]'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
