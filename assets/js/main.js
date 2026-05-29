(function () {
  'use strict';

  var CALENDLY_URL = 'https://calendly.com/sahajgodhani777/15min';

  /* Calendly */
  document.querySelectorAll('[data-calendly]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof Calendly !== 'undefined') {
        Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        window.open(CALENDLY_URL, '_blank');
      }
    });
  });

  /* Mobile nav */
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Case study expand */
  document.querySelectorAll('.case-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var targetId = card.getAttribute('data-case');
      var detail = document.getElementById(targetId);
      if (!detail) return;

      var isOpen = detail.classList.contains('is-open');

      document.querySelectorAll('.case-detail').forEach(function (d) {
        d.classList.remove('is-open');
      });
      document.querySelectorAll('.case-card').forEach(function (c) {
        c.classList.remove('is-active');
      });

      if (!isOpen) {
        detail.classList.add('is-open');
        card.classList.add('is-active');
        detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  /* UI/UX project filters */
  var filterPills = document.querySelectorAll('.filter-pill');
  var uiCards = document.querySelectorAll('.ui-card');

  filterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var filter = pill.getAttribute('data-filter');

      filterPills.forEach(function (p) {
        p.classList.remove('is-active');
      });
      pill.classList.add('is-active');

      uiCards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        var show = filter === 'all' || category === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('is-open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
