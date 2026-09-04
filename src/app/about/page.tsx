import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-[#FFF8F0]/30">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-6 tracking-tight">
            꽃곰케이크 이야기
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed break-keep">
            아름다운 꽃을 피워내는 정성으로, 당신의 가장 특별한 순간을 완성합니다.
            <br className="hidden md:block" /> 매일 아침 신선한 재료와 한 잎 한 잎 정성스레 피워낸 꽃으로 만드는 수제 케이크.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 bg-[url('https://www.transparenttextures.com/patterns/floral-pattern.png')]"></div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: '정성 Sincerity', desc: '모든 재료는 깐깐하게 고르고, 건강한 단맛을 위해 연구합니다. 작은 디테일 하나도 놓치지 않는 정성을 담습니다.', color: '#F5C6D0' },
              { title: '예술 Art', desc: '케이크는 먹는 예술 작품입니다. 생화의 아름다움을 그대로 재현하여 눈으로 먼저 맛보는 즐거움을 선사합니다.', color: '#C9A0DC' },
              { title: '행복 Happiness', desc: '우리의 케이크가 상자에 담겨 당신에게 전해지는 순간, 그날의 분위기가 더욱 행복해지기를 진심으로 바랍니다.', color: '#A8C5A0' }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 rounded-3xl bg-[#FEF3E8]/50 hover:bg-[#FEF3E8] transition-colors">
                <div 
                  className="w-16 h-16 mx-auto rounded-full mb-6 flex items-center justify-center text-white font-bold text-xl shadow-md"
                  style={{ backgroundColor: value.color }}
                >
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#3D3D3D] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm break-keep">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3D3D3D] mb-4">제작 과정</h2>
            <p className="text-gray-500">꽃곰케이크가 완성되기까지의 특별한 여정</p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {[
              { step: 'STEP 1', title: '상담 및 디자인 기획', desc: '고객님의 사연과 취향을 귀담아듣고, 세상에 하나뿐인 케이크 디자인을 스케치합니다.' },
              { step: 'STEP 2', title: '시트 및 크림 제작', desc: '수령 당일, 신선한 재료로 촉촉한 시트를 굽고 부드러운 크림을 정성껏 휘핑합니다.' },
              { step: 'STEP 3', title: '플라워 파이핑', desc: '한 잎 한 잎, 실제 꽃의 질감과 색감을 살려 섬세하게 꽃을 피워냅니다.' },
              { step: 'STEP 4', title: '어레인지 및 완성', desc: '가장 아름다운 구도로 꽃을 올리고, 레터링으로 마음을 담아 포장합니다.' }
            ].map((process, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                <div className="w-full md:w-1/2 aspect-[4/3] bg-white rounded-3xl shadow-sm border border-[#F5C6D0]/30 relative overflow-hidden flex items-center justify-center text-[#E8A0B5]/30">
                  <span className="text-4xl font-bold">Image {idx + 1}</span>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8A0B5]/10 text-[#D4849E] font-bold text-sm">
                    {process.step}
                  </span>
                  <h3 className="text-2xl font-bold text-[#3D3D3D]">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg break-keep">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
