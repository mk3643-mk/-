'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Palette, CreditCard, Gift, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '예약은 며칠 전까지 해야 하나요?',
    a: '최소 3일 전 예약을 권장해 드립니다. 주말이나 공휴일, 특별한 시즌(어버이날, 크리스마스 등)에는 예약이 조기 마감될 수 있으니 여유 있게 1~2주 전 예약 부탁드립니다.'
  },
  {
    q: '원하는 디자인으로 100% 똑같이 제작 가능한가요?',
    a: '수제 케이크 특성상 색상 조색이나 꽃의 형태가 사진과 100% 동일할 수는 없습니다. 하지만 고객님이 원하시는 느낌과 분위기를 최대한 살려 정성껏 제작해 드립니다. 타 업체의 디자인은 참고만 하며 똑같이 카피하여 제작하지는 않습니다.'
  },
  {
    q: '퀵 배송 시 파손 위험은 없나요?',
    a: '케이크 전문 퀵서비스(차량 퀵)를 이용하여 안전하게 배송해 드립니다. 다만 배송 중 발생할 수 있는 미세한 흔들림이나 변형에 대해서는 환불이 어려울 수 있으니 중요한 행사라면 매장 픽업을 권장합니다.'
  },
  {
    q: '취소 및 환불 규정이 어떻게 되나요?',
    a: '픽업일 기준 4일 전까지는 100% 환불 가능합니다. 3일 전부터는 재료 준비 및 시트 제작이 시작되므로 환불이 불가한 점 양해 부탁드립니다.'
  }
];

export default function CustomOrderPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#FFF8F0]/30 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-6 inline-block relative">
            커스텀 주문 안내
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#F5C6D0]/50 rounded-full"></div>
          </h1>
          <p className="text-gray-600 mt-6">세상에 단 하나뿐인, 당신만의 특별한 케이크를 만들어 드립니다.</p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-24">
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-[#F5C6D0]/30 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {[
              {
                icon: <MessageCircle className="w-6 h-6 text-[#E8A0B5]" />,
                title: '상담 예약',
                desc: '카카오톡 채널 또는 전화로 원하시는 날짜와 기본적인 디자인(참고 사진)을 보내주시면 상담을 도와드립니다.'
              },
              {
                icon: <Palette className="w-6 h-6 text-[#C9A0DC]" />,
                title: '디자인 확정',
                desc: '케이크 사이즈, 시트 맛, 전체적인 색감, 들어갈 꽃의 종류, 레터링 문구 등 디테일한 요소를 확정합니다.'
              },
              {
                icon: <CreditCard className="w-6 h-6 text-[#A8C5A0]" />,
                title: '결제 및 제작',
                desc: '안내해 드린 금액을 결제하시면 예약이 확정됩니다. 수령일에 맞춰 가장 신선하고 예쁘게 제작을 진행합니다.'
              },
              {
                icon: <Gift className="w-6 h-6 text-[#E8A0B5]" />,
                title: '수령',
                desc: '예약하신 시간에 매장을 방문하여 픽업하시거나, 안전한 차량 퀵서비스를 통해 받아보실 수 있습니다.'
              }
            ].map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center relative z-10 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex flex-col md:px-12">
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-[#FFF8F0] ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-sm font-bold text-[#A67BB7] mb-2 block">STEP 0{idx + 1}</span>
                    <h3 className="text-xl font-bold text-[#3D3D3D] mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed break-keep">{step.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#FFF8F0] flex items-center justify-center shadow-sm hidden md:flex">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-24">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FEE500] text-[#3D3D3D] font-bold rounded-xl shadow-sm hover:bg-[#FEE500]/90 transition-colors">
              <MessageCircle className="w-5 h-5" />
              카카오톡으로 문의하기
            </button>
            <a href="tel:010-3427-3575" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#3D3D3D] font-bold rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5" />
              010-3427-3575
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#FFF8F0]">
          <h2 className="text-2xl font-bold text-[#3D3D3D] mb-8 text-center">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <span className="font-bold text-[#3D3D3D] pr-4">Q. {faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 text-sm leading-relaxed bg-[#FFF8F0]/50 p-4 rounded-xl break-keep">
                    A. {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
