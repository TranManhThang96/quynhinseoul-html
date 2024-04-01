import './style.css';
import './styles/home.scss';
import 'animate.css';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import marquee from 'vanilla-marquee';

new marquee(document.getElementById('marquee1'), {
  delayBeforeStart: 0,
  direction: 'down',
  duplicated: true,
  gap: 0,
  css3easing: 'ease',
  duration: 50000000,
  startVisible: true,
  pauseOnHover: false,
});

new marquee(document.getElementById('marquee2'), {
  delayBeforeStart: 0,
  direction: 'up',
  duplicated: true,
  gap: 0,
  css3easing: 'ease',
  duration: 50000000,
  startVisible: true,
  pauseOnHover: false,
});

var splide = new Splide('#splide', {
  autoplay: true,
  interval: 8000,
  rewind: true,
  perPage: 2,
});
splide.mount();

var splide2 = new Splide('#splide2', {
  autoplay: true,
  interval: 8000,
  rewind: true,
  perPage: 1,
});
splide2.mount();

// scroll to element and add animated
const elements = document.querySelectorAll('.animate__animated');

const handleShowFirst = () => {
  addAnimation(true);
};

const backToTopElement = document.getElementById('back-to-top');
const handleScroll = () => {
  addAnimation();
  var scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (scrollTop > 500) {
    backToTopElement.classList.add('show');
  } else {
    backToTopElement.classList.remove('show');
  }
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
      (window.innerHeight || document.documentElement.clientHeight) + 400 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener('DOMContentLoaded', handleShowFirst);
window.addEventListener('scroll', handleScroll);

const buttonViewMoreActivities = document.getElementById(
  'view-more-activities'
);
buttonViewMoreActivities.addEventListener('click', function (e) {
  e.preventDefault();
  const appendActivities =
    document.getElementById('activities-hidden').innerHTML;
  document
    .getElementById('activities')
    .insertAdjacentHTML('beforeend', appendActivities);
  buttonViewMoreActivities.remove();
});

backToTopElement.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
