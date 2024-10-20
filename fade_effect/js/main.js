// const swiper = new Swiper('.swiper', {
//   effect: 'coverflow',

//   coverflowEffect: {
//     rotate: 30,
//     slideShadows: false,
//   },
// });

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',  // 커버플로우 효과 설정
  grabCursor: true,     // 마우스로 슬라이드를 잡아 움직이는 효과
  centeredSlides: true, // 슬라이드가 가운데 정렬
  slidesPerView: 'auto', // 화면에 보이는 슬라이드 수 자동 조정

  coverflowEffect: {
    rotate: 30,         // 슬라이드 회전 각도
    stretch: 0,         // 슬라이드 간격
    depth: 100,         // 3D 깊이
    modifier: 1,        // 효과 강도
    slideShadows: false // 슬라이드 그림자 비활성화
  },

  pagination: {
    el: '.swiper-pagination', // 페이지네이션 활성화 (필요 시 추가)
  },
});

// 우오 미치겠군!!!!!!!!!!?