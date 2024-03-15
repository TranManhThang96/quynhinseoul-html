import './style.css';
import './styles/home.scss';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import marquee from 'vanilla-marquee';

var splide = new Splide('.splide', {
  autoplay: true,
  interval: 3000,
  perPage: 1,
  rewind: true,
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
