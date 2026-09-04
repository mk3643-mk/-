import Link from 'next/link';
import Image from 'next/image';
import { Camera, MessageCircle, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3D3D3D] text-white pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="mb-10 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-8 h-8 bg-white/10 rounded-full p-1">
              <Image 
                src="/logo.png" 
                alt="꽃곰케이크 로고" 
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="font-bold text-2xl tracking-tight">꽃곰케이크</span>
          </div>
          <p className="text-[#F5C6D0] italic text-sm">Bloom with Happiness</p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10 border-t border-gray-600/50 pt-10">
          {/* 고객센터 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4 text-[#FEF3E8]">고객센터</h3>
            <p className="text-2xl font-bold text-white mb-2">010-3427-3575</p>
            <p className="text-gray-400 text-sm mb-1">운영시간: 10:00 - 19:00 (월-금)</p>
            <p className="text-gray-400 text-sm mb-1">점심시간: 12:30 - 13:30</p>
            <p className="text-gray-400 text-sm">이메일: hello@kkotgom.com</p>
          </div>

          {/* 이용안내 */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-bold mb-4 text-[#FEF3E8]">이용안내</h3>
            <ul className="flex flex-col gap-2 text-center lg:text-left">
              <li><Link href="/guide/order" className="text-gray-400 hover:text-white transition-colors">주문/결제 안내</Link></li>
              <li><Link href="/guide/delivery" className="text-gray-400 hover:text-white transition-colors">배송/픽업 안내</Link></li>
              <li><Link href="/guide/return" className="text-gray-400 hover:text-white transition-colors">교환/반품 안내</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* SNS */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-bold mb-4 text-[#FEF3E8]">SNS</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#D4849E] hover:text-white transition-colors">
                <Camera size={20} />
              </a>
              <a href="https://pf.kakao.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#FEE500] hover:text-black transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#03C75A] hover:text-white transition-colors">
                <BookOpen size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600/50 pt-8 flex flex-col items-center lg:items-start text-xs text-gray-400 text-center lg:text-left leading-relaxed">
          <p className="mb-2">
            상호명: 꽃곰케이크 | 대표자: 김휘경 | 사업자등록번호: 123-45-67890 <br className="lg:hidden" />
            <span className="hidden lg:inline"> | </span>통신판매업신고: 제2024-경기광주-0123호
          </p>
          <p className="mb-4">사업장 소재지: 경기도 광주시 양벌로 375</p>
          <p>© {new Date().getFullYear()} KKOTGOM CAKE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
