const jsBody = document.querySelector('.js-body');
const jsHeader = document.querySelector('.js-header');
const jsNav = document.querySelector('.js-nav');
const jsNavToggler = document.querySelector('.js-nav-toggler');


jsNavToggler.addEventListener('click', e => {
  const state = e.currentTarget.getAttribute('aria-expanded') === 'true';
  e.currentTarget.setAttribute('aria-expanded', !state);

  if (state) {
    // open -> close
    jsBody.setAttribute('data-scroll', 'scroll');
    jsNav.setAttribute('data-state', 'closing');
    jsNav.addEventListener('animationend', e => {
        e.currentTarget.setAttribute('data-state', 'closed');
        jsHeader.setAttribute('aria-expanded', false)
    }, {once: true});
  } else {
    // close -> open
    jsBody.setAttribute('data-scroll', 'no-scroll');
    jsHeader.setAttribute('aria-expanded', true)
    jsNav.setAttribute('data-state', 'open');
  }
});


// Observe About To Trigger Navigation Styles;
const jsNavObserverTrigger = document.querySelector('.js-nav-observer-trigger');
const observerConfig = {
  root: null,
  threshold: 0.3,
  rootMargin: '0px',
};

const navbarObserver = new IntersectionObserver((entries) => {
  const [entry] = entries;

  if(entry.isIntersecting) {
    jsHeader.classList.add('is-scrolling');
  }else {
    jsHeader.classList.remove('is-scrolling');
  }

}, observerConfig);

navbarObserver.observe(jsNavObserverTrigger)