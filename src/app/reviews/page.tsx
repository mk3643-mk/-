'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

const mockReviews = [
  {
    id: 1,
    name: '김지현',
    rating: 5,
    date: '2023.10.15',
    text: '어머니 칠순 기념으로 앙금플라워 떡케이크 주문했는데 너무 좋아하셨어요! 꽃이 생화처럼 너무 정교하고 예뻐서 먹기 아까울 정도였습니다. 맛도 많이 달지 않고 쫀득해서 어르신들 입맛에 딱이었어요. 감사합니다!',
  },
  {
    id: 2,
    name: '이수연',
    rating: 5,
    date: '2023.11.02',
    text: '프로포즈용으로 생화 케이크 주문했습니다. 꽃 색감도 제가 요청한 파스텔톤으로 완벽하게 맞춰주셨고, 케이크 시트도 부드럽고 맛있었어요. 덕분에 성공적으로 프로포즈 했습니다!!',
  },
  {
    id: 3,
    name: '박민정',
    rating: 4,
    date: '2023.11.20',
    text: '친구 브라이덜 샤워 파티에 가져갔는데 다들 어디서 샀냐고 난리였어요ㅎㅎ 사진도 너무 잘나오고 레터링도 귀엽게 잘 써주셨어요! 퀵 배송도 안전하게 시간맞춰 잘 왔습니다.',
  },
  {
    id: 4,
    name: '최영호',
    rating: 5,
    date: '2023.12.05',
    text: '여자친구 생일이라 버터크림 케이크 주문했습니다. 디자인 상담할때부터 엄청 친절하셨고, 결과물은 기대 이상이었습니다. 크림이 느끼하지 않아서 둘이서 다 먹었네요.',
  },
  {
    id: 5,
    name: '정하늘',
    rating: 5,
    date: '2023.12.18',
    text: '벌써 3번째 재주문입니다~ 중요한 행사 있을때마다 항상 꽃곰케이크에서 주문해요. 매번 변함없는 퀄리티와 맛에 감동합니다. 사장님 번창하세요!!',
  },
  {
    id: 6,
    name: '강지우',
    rating: 4,
    date: '2024.01.10',
    text: '부모님 결혼기념일 케이크로 준비했어요. 포장부터 리본까지 너무 고급스러워서 선물용으로 최고입니다. 흑임자 시트로 했는데 고소하고 맛있었어요.',
  }
];

export default function ReviewsPage() {
  const averageRating = 4.9;

  return (
    <div className="bg-[#FFF8F0]/30 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-6">고객 리뷰</h1>
          
          <div className="inline-flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-[#F5C6D0]/30">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-10 h-10 fill-[#F5C6D0] text-[#F5C6D0]" />
              <span className="text-4xl font-bold text-[#3D3D3D]">{averageRating}</span>
              <span className="text-xl text-gray-400 font-medium">/ 5.0</span>
            </div>
            <p className="text-gray-500">고객님들이 남겨주신 소중한 후기입니다.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mockReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FEF3E8] flex items-center justify-center text-[#D4849E] font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#3D3D3D]">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'fill-[#F5C6D0] text-[#F5C6D0]' : 'fill-gray-100 text-gray-200'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 break-keep">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
