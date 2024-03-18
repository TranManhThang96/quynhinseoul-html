import './style.css';
import './styles/home.scss';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import marquee from 'vanilla-marquee';

var splide = new Splide('.splide', {
  autoplay: true,
  interval: 3000,
  perPage: 1,
});
splide.mount();

document.addEventListener('DOMContentLoaded', () => {
  const marquee1 = new marquee(document.getElementById('marquee1'), {
    delayBeforeStart: 0,
    css3easing: 'ease-in',
    direction: 'down',
    duplicated: true,
    gap: 0,
    duration: 5000000,
    recalcResize: true,
  });

  const marquee2 = new marquee(document.getElementById('marquee2'), {
    delayBeforeStart: 0,
    css3easing: 'ease-in',
    direction: 'up',
    duplicated: true,
    gap: 0,
    duration: 5000000,
    recalcResize: true,
  });

  setTimeout(() => {
    marquee1.pause();
    marquee2.pause();
    marquee1.destroy();
    marquee2.destroy();
  }, 50000);
});

// Khởi tạo marquee khi trang được tải
window.addEventListener('DOMContentLoaded', function () {
  startMarquee();
});

// Hàm bắt đầu marquee
function startMarquee() {
  var marquee = document.querySelector('.marquee');

  // Thiết lập chiều dài của marquee
  marquee.style.height = 326 + 'px';

  // Sao chép nội dung của span vào cuối marquee
  marquee.innerHTML += marquee.innerHTML;

  // Hủy bỏ animation trước đó (nếu có)
  marquee.style.animation = 'none';

  // Đợi một chút rồi khởi động lại animation
  setTimeout(function () {
    marquee.style.animation = '';
  }, 10);
}
