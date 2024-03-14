import './style.css';
import './styles/home.scss';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
var splide = new Splide('.splide', {
  autoplay: true,
  interval: 3000,
  perPage: 1,
  rewind: true,
});

splide.mount();

import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
