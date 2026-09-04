import { Flower2, CalendarCheck, Truck, Heart } from 'lucide-react';

const features = [
  {
    icon: <Flower2 className="w-10 h-10 text-[#D4849E]" />,
    title: '100% 수제 제작',
    description: '숙련된 파티시에가 한 송이 한 송이 정성껏 만듭니다'
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-[#D4849E]" />,
    title: '완전 예약제',
    description: '수령일 기준 3일 전 주문, 최상의 컨디션을 약속합니다'
  },
  {
    icon: <Truck className="w-10 h-10 text-[#D4849E]" />,
    title: '안심 배송',
    description: '꽃케이크 전용 안전 포장으로 퀵/택배 배송합니다'
  },
  {
    icon: <Heart className="w-10 h-10 text-[#D4849E]" />,
    title: '맞춤 제작',
    description: '원하는 문구, 색상, 꽃 조합으로 커스텀 가능합니다'
  }
];

export default function FeatureSection() {
  return (
    <section className="w-full bg-[#FEF3E8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3D3D3D]">꽃곰케이크가 특별한 이유</h2>
          <div className="w-20 h-1.5 bg-[#E8A0B5] mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1 border border-[#FFF8F0]"
            >
              <div className="w-20 h-20 bg-[#FFF8F0] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-extrabold text-[#3D3D3D] mb-3">{feature.title}</h3>
              <p className="text-base text-gray-600 break-keep leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
