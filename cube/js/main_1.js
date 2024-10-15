let isSyncing = false;

const swiperHorizontal = new Swiper('.swiper_horizontal', {
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },

  direction: 'horizontal',
  loop: true,

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

  direction: 'vertical',
  loop: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  }
});

// swiperHorizontal.on('slideChange', () => {
//   swiperVertical.slideTo(swiperHorizontal.activeIndex);
// });

// swiperVertical.on('slideChange', () => {
//   swiperHorizontal.slideTo(swiperVertical.activeIndex);
// });

swiperHorizontal.on('slideChange', () =>{
  if(!isSyncing){
    isSyncing = true;
    swiperVertical.autoplay.stop();
    swiperVertical.slideTo(swiperHorizontal.activeIndex, 500, false);
    swiperVertical.autoplay.start();
    isSyncing = false;
  };
  

});

swiperVertical.on('slideChange', () =>{
  if(!isSyncing){
    isSyncing = true;
    swiperVertical.autoplay.stop();
    swiperHorizontal.slideTo(swiperVertical.activeIndex, 500, false);
    swiperHorizontal.autoplay.start();
    isSyncing = false;
  };
  
});