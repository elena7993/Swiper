// const swiper = new Swiper('.swiper', {
//   zoom: {
//     maxRatio: 5,
//   },
// });

let rotation = 0;

const swiper = new Swiper('.swiper', {
  zoom: {
    maxRatio: 5,
    Toggle: true,
  },
  // =>클릭 시 줌 인/아웃이 번갈아 가며 적용되도록함

  speed: 600,
  // =>줌 애니메이션 속도

});

const rotateBtn = document.querySelector('.rotate_btn');
const zoomedImg = document.querySelector('.zoomed_img')

const handleClick = () => {
  rotation += 90;
  // =>90도씩 회전하고

  if(rotation === 360){
    rotation = 0;
    // =>한 바쿠돌면 초기화되야함!
  }

  zoomedImg.style.transform = `rotate(${rotation}deg) scale(${swiper.zoom.scale})`;
  // =>줌 상태를 유지하며 회전함!!
} 


rotateBtn.addEventListener('click', handleClick);