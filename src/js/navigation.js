const jsBody = document.querySelector('.js-body');
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
    }, {once: true});
  } else {
    // close -> open
    jsBody.setAttribute('data-scroll', 'no-scroll');
    jsNav.setAttribute('data-state', 'open');
  }
});
