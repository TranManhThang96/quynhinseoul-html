import './style.css';
import './styles/home.scss';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

var splide = new Splide('.splide', {
  autoplay: true,
  interval: 3000,
  perPage: 1,
});
splide.mount();
