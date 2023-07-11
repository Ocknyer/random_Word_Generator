const rc4 = [
    {
    id: 1,
    word: 'leading',
    mean: ['선두적인', '중요한'],
    },
    {
    id: 2,
    word: 'the leading competitor',
    mean: ['선두적인 경쟁업체', '선두 경쟁업체'],
    },
    {
    id: 3,
    word: 'the leading supplier',
    mean: ['선두적인 공급업체', '선두 공급업체'],
    },
    {
    id: 4,
    word: 'multiple',
    mean: ['다양한', '다수의'],
    },
    {
    id: 5,
    word: 'multiple destinations',
    mean: ['다수의 목적지', ''],
    },
    {
    id: 6,
    word: 'multiple transfers',
    mean: ['수차례의 전근', ''],
    },
    {
    id: 7,
    word: 'previous',
    mean: ['이전의'],
    },
    {
    id: 8,
    word: 'the previous year',
    mean: ['작년', ''],
    },
    {
    id: 9,
    word: 'a previous commitment',
    mean: ['선약', ''],
    },
    {
    id: 10,
    word: 'experienced',
    mean: ['능숙한', '노련한'],
    },
    {
    id: 11,
    word: 'an experienced worker',
    mean: ['능숙한 근로자', ''],
    },
    {
    id: 12,
    word: 'an experienced professional',
    mean: ['능숙한 전문가', ''],
    },
    {
    id: 13,
    word: 'significant',
    mean: ['중요한', '상당한 의미있는'],
    },
    {
    id: 14,
    word: 'sianificant arowth',
    mean: ['상당한[폭발적인] 성장', ''],
    },
    {
    id: 15,
    word: 'a significant shipping delay',
    mean: ['상당한 배송 지연', ''],
    },
    {
    id: 16,
    word: 'routine',
    mean: ['반복적인', '정기적인'],
    },
    {
    id: 17,
    word: 'a routine inspection',
    mean: ['정기 점검', ''],
    },
    {
    id: 18,
    word: 'a routine visit ',
    mean: ['정기 방문', ''],
    },
    {
    id: 19,
    word: 'specific',
    mean: ['구체적인', '분명한', '특정한'],
    },
    {
    id: 20,
    word: 'a specific feature',
    mean: ['구체적인 특성', ''],
    },
    {
    id: 21,
    word: 'a specific event',
    mean: [' 특정한행사', ''],
    },
    {
    id: 22,
    word: 'detailed',
    mean: ['자세하게 설명된', '상세한'],
    },
    {
    id: 23,
    word: 'a detailed manual',
    mean: ['상세한 설명서', ''],
    },
    {
    id: 24,
    word: 'a detailed review ',
    mean: ['상세한 평가', ''],
    },
    {
    id: 25,
    word: 'complimentary',
    mean: ['무료의', '칭찬하는'],
    },
    {
    id: 26,
    word: 'a complimentary coupon',
    mean: ['무료 쿠폰', ''],
    },
    {
    id: 27,
    word: 'a complimentary breakfast ',
    mean: ['무료 아침식사', ''],
    },
    {
    id: 28,
    word: 'outstanding',
    mean: ['뛰어난', '두드러진', '미지불된'],
    },
    {
    id: 29,
    word: 'an outstanding achievement',
    mean: ['놀라운 업적', ''],
    },
    {
    id: 30,
    word: 'an outstanding debt ',
    mean: ['미불 채무', ''],
    },
    {
    id: 31,
    word: 'completed',
    mean: ['작성된', '완성된'],
    },
    {
    id: 32,
    word: 'a completed form',
    mean: ['작성된 양식'],
    },
    {
    id: 33,
    word: 'a completed work',
    mean: [' 완성된 작업'],
    },
    {
    id: 34,
    word: 'immediate',
    mean: ['즉각적인', '직속의'],
    },
    {
    id: 35,
    word: 'immediate attention',
    mean: ['즉각적인 주목'],
    },
    {
    id: 36,
    word: 'my immediate supervisor',
    mean: ['내 직속상관'],
    },
    {
    id: 37,
    word: 'innovative',
    mean: ['혁신적인', ''],
    },
    {
    id: 38,
    word: 'an innovative idea',
    mean: ['혁신적인 발상', ''],
    },
    {
    id: 39,
    word: 'an innovative design',
    mean: ['혁신적인 디자인', ''],
    },
    {
    id: 40,
    word: 'unique',
    mean: ['독특한', '고유의', '특별한'],
    },
    {
    id: 41,
    word: 'a unique collection',
    mean: ['희귀한 소장품', ''],
    },
    {
      id: 42,
      word: 'a unique service',
      mean: ['특별한 서비스', ''],
    },
    {
      id: 43,
      word: 'exemplary',
      mean: ['모범적인', '본보기의'],
    },
    {
      id: 44,
      word: 'exemplary service',
      mean: ['모범적인 서비스', ''],
    },
    {
      id: 45,
      word: 'exemplary performance',
      mean: ['본보기가 될 만한 성과', ''],
    },
    {
      id: 46,
      word: 'accurate',
      mean: ['정확한', ''],
    },
    {
      id: 47,
      word: 'an accurate diagnosis',
      mean: ['정확한 진단', ''],
    },
    {
      id: 48,
      word: 'an accurate description',
      mean: ['정확한 설명', ''],
    },
    {
      id: 49,
      word: 'complete',
      mean: ['완전한', '완벽한'],
    },
    {
      id: 50,
      word: 'a complete schedule',
      mean: ['(빠진 것이 없는) 전체 일정', '전체 일정'],
    },
    {
      id: 51,
      word: 'a complete list',
      mean: ['(빠진 것이 없는) 전체 목록', '전체 목록'],
    },
    {
      id: 52,
      word: 'severe',
      mean: ['심각한', '혹독한', '엄격한'],
    },
    {
      id: 53,
      word: 'severe damage',
      mean: ['심각한 피해', ''],
    },
    {
      id: 54,
      word: 'severe weather conditions',
      mean: ['혹독한 기후 조건', ''],
    },
    {
      id: 55,
      word: 'expensive',
      mean: ['비싼', '비용이 많이 드는'],
    },
    {
      id: 56,
      word: 'an expensive repair',
      mean: ['비용이 많이 드는 수리', ''],
    },
    {
      id: 57,
      word: 'expensive alternative',
      mean: ['비용이 많이 드는 대안', ''],
    },
    {
      id: 58,
      word: 'common',
      mean: ['공통의', '일반적인', '흔한'],
    },
    {
      id: 59,
      word: 'a common goal',
      mean: ['공통 목표', ''],
    },
    {
      id: 60,
      word: 'common ground',
      mean: ['공통점', ''],
    },
    {
      id: 61,
      word: 'thorough',
      mean: ['철저한', '완전한'],
    },
    {
      id: 62,
      word: 'a thorough inspection',
      mean: ['철저한 점검', ''],
    },
    {
      id: 63,
      word: 'a thorough understanding',
      mean: ['철저한 이행', ''],
    },
    {
      id: 64,
      word: 'temporary',
      mean: ['일시적인', '임시의'],
    },
    {
      id: 65,
      word: 'a temoorary inconvenience',
      mean: ['일시적인 불편', ''],
    },
    {
      id: 66,
      word: 'a temporary suspension',
      mean: ['일시적인 보류', ''],
    },
    {
      id: 67,
      word: 'initial',
      mean: ['처음의', '초기의'],
    },
    {
      id: 68,
      word: 'an initial investment',
      mean: ['an initial investment', '초기 투자'],
    },
    {
      id: 69,
      word: 'initial projections',
      mean: ['초기 예상', '초기 추정'],
    },
    {
      id: 70,
      word: 'standard',
      mean: ['표준의', '규격의'],
    },
    {
      id: 71,
      word: 'the standard price',
      mean: ['표준 가격', ''],
    },
    {
      id: 72,
      word: 'the standard business hours',
      mean: ['표준 영업시간', ''],
    },
  ];
  
  export default rc4;
  
//   {
//     id: 1,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 2,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 3,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 4,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 5,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 6,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 7,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 8,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 9,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 10,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 11,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 12,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 13,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 14,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 15,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 16,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 17,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 18,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 19,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 20,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 21,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 22,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 23,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 24,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 25,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 26,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 27,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 28,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 29,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 30,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 31,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 32,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 33,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 34,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 35,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 36,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 37,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 38,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 39,
//     word: '',
//     mean: ['', ''],
//   },
//   {
//     id: 40,
//     word: '',
//     mean: ['', ''],
//   },
  