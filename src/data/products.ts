export interface ProductOption {
  name: string;
  additionalPrice: number;
}

export interface ProductOptions {
  sizes: ProductOption[];
  flavors: ProductOption[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  images: string[];
  category: '생화케이크' | '앙금플라워' | '버터크림' | '떡케이크';
  isAvailable: boolean;
  options: ProductOptions;
}

export interface CartItem extends Product {
  selectedSize: ProductOption;
  selectedFlavor: ProductOption;
  lettering?: string;
  pickupDate: string;
  pickupTime: string;
  deliveryType?: '픽업' | '배달';
  address?: string;
  quantity: number;
  totalPrice: number;
}

const defaultOptions: ProductOptions = {
  sizes: [
    { name: '미니 (지름 10cm)', additionalPrice: 0 },
    { name: '1호 (지름 15cm)', additionalPrice: 0 },
    { name: '2호 (지름 18cm)', additionalPrice: 15000 },
    { name: '2단 (1호+미니)', additionalPrice: 35000 }
  ],
  flavors: [
    { name: '바닐라 시트', additionalPrice: 0 },
    { name: '초코 시트', additionalPrice: 3000 },
    { name: '당근 시트', additionalPrice: 5000 },
    { name: '흑임자 시트', additionalPrice: 5000 }
  ]
};

export const products: Product[] = [
  {
    id: '1',
    name: '시그니처 로즈 앙금플라워 떡케이크',
    description: '꽃곰케이크의 시그니처 디자인으로, 풍성하게 피어난 장미꽃을 앙금으로 정성스럽게 피워낸 떡케이크입니다. 달콤하고 부드러운 앙금과 쫄깃한 백설기의 조화가 일품입니다.',
    basePrice: 65000,
    images: ['https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600'],
    category: '앙금플라워',
    isAvailable: true,
    options: defaultOptions
  },
  {
    id: '2',
    name: '파스텔 작약 생화 케이크',
    description: '부드러운 파스텔 톤의 생화 작약을 메인으로 장식한 생화 케이크입니다. 특별한 날을 더욱 빛내주는 고급스러운 디자인과 은은한 꽃향기를 선물하세요.',
    basePrice: 78000,
    images: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600'],
    category: '생화케이크',
    isAvailable: true,
    options: defaultOptions
  },
  {
    id: '3',
    name: '클래식 카네이션 케이크',
    description: '부모님께 감사한 마음을 전하기 좋은 클래식한 디자인의 카네이션 생화 케이크입니다. 우아한 레드 톤의 카네이션이 풍성하게 올라가 있습니다.',
    basePrice: 72000,
    images: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600'],
    category: '생화케이크',
    isAvailable: true,
    options: defaultOptions
  },
  {
    id: '4',
    name: '봄빛 라넌큘러스 케이크',
    description: '겹겹이 잎이 핀 아름다운 라넌큘러스를 사용한 화사한 느낌의 케이크입니다. 봄의 따뜻함과 싱그러움을 가득 담아 제작했습니다.',
    basePrice: 85000,
    images: ['https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600'],
    category: '생화케이크',
    isAvailable: true,
    options: defaultOptions
  },
  {
    id: '5',
    name: '프렌치 장미 버터크림 케이크',
    description: '고급 서울우유 버터를 사용하여 만든 고소하고 부드러운 버터크림으로 프렌치 스타일 장미를 파이핑한 케이크입니다. 빈티지하면서도 우아한 매력이 있습니다.',
    basePrice: 68000,
    images: ['https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=600'],
    category: '버터크림',
    isAvailable: true,
    options: defaultOptions
  },
  {
    id: '6',
    name: '러블리 튤립 앙금 케이크',
    description: '귀엽고 사랑스러운 튤립을 앙금으로 표현한 떡케이크입니다. 화사한 컬러감으로 브라이덜 샤워나 친구들의 생일 파티에 추천합니다.',
    basePrice: 70000,
    images: ['https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600'],
    category: '앙금플라워',
    isAvailable: true,
    options: defaultOptions
  },
  {
    id: '7',
    name: '가든파티 믹스 플라워 케이크',
    description: '마치 정원의 꽃들을 그대로 옮겨 놓은 듯 다양한 종류의 생화를 자연스럽게 어레인지한 프리미엄 케이크입니다.',
    basePrice: 88000,
    images: ['https://images.unsplash.com/photo-1542826438-bd32fcf376ca?w=600'],
    category: '생화케이크',
    isAvailable: true,
    options: defaultOptions
  },
  {
    id: '8',
    name: '미니 꽃다발 컵케이크 세트',
    description: '다양한 꽃송이가 올라간 컵케이크 4구가 한 세트로 구성된 미니 꽃다발 컵케이크입니다. 선물용으로 아주 좋고 나눠 먹기 편리합니다.',
    basePrice: 45000,
    images: ['https://images.unsplash.com/photo-1519869325930-281384150729?w=600'],
    category: '버터크림',
    isAvailable: true,
    options: defaultOptions
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (!category || category === '전체') return products;
  return products.filter(product => product.category === category);
};
