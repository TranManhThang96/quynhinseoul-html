import './style.css';
import './styles/home.scss';
import 'animate.css';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

var splide = new Splide('.splide', {
  autoplay: true,
  interval: 3000,
  perPage: 1,
});
splide.mount();

// scroll to element and add animated
const elements = document.querySelectorAll('.animate__animated');

const handleShowFirst = () => {
  addAnimation(true);
};

const handleScroll = () => {
  addAnimation();
};

const addAnimation = (isShowFirst = false) => {
  elements.forEach((element) => {
    if (isElementInViewport(element, isShowFirst)) {
      const animationClass = element.dataset?.animation || 'fadeInUp';
      const duration = element.dataset?.duration || 2.5;
      const delay = element.dataset?.delay;
      element.classList.add(`animate__${animationClass}`);
      if (delay) {
        element.classList.add(`animate__delay-${delay}s`);
      }
      element.style.visibility = 'visible';
      if (duration) {
        element.style.animationDuration = `${duration}s`;
      }
    }
  });
};

const isElementInViewport = (element, isShowFirst = false) => {
  const rect = element.getBoundingClientRect();
  if (isShowFirst) {
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) - 50 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener('DOMContentLoaded', handleShowFirst);
window.addEventListener('scroll', handleScroll);
