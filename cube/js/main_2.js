let isSyncing = false;
let directionForward = true;

const swiperHorizontal = new Swiper('.swiper_horizontal', {
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  loop: false,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  }
});

const swiperVertical = new Swiper('.swiper_vertical', {
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  loop: false,
  direction: 'vertical',
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  }
});

function handleSlideChange(swiper, otherSwiper) {
  if (!isSyncing) {
    isSyncing = true;

    // 슬라이드가 마지막에 도달했을 때 역방향으로 전환
    if (swiper.activeIndex === swiper.slides.length - 1 && directionForward) {
      directionForward = false;
    } else if (swiper.activeIndex === 0 && !directionForward) {
      directionForward = true;  // 처음 슬라이드로 돌아오면 다시 정방향으로 전환
    }

    // 정방향일 때는 다음 슬라이드, 역방향일 때는 이전 슬라이드로 이동
    if (directionForward) {
      otherSwiper.slideNext(500, false);  // 다음 슬라이드
    } else {
      otherSwiper.slidePrev(500, false);  // 이전 슬라이드
    }

    isSyncing = false;
  }
}

swiperHorizontal.on('slideChange', () => {
  handleSlideChange(swiperHorizontal, swiperVertical);
});

swiperVertical.on('slideChange', () => {
  handleSlideChange(swiperVertical, swiperHorizontal);
});