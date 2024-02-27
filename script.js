// animate the header
gsap.from('header', { duration: 1, ease: 'bounce', y: '-100%' });

// animate the nav-links
gsap.from('header .links .link', {
  duration: 1,
  opacity: 0,
  delay: 1,
  stagger: 0.3,
});

// animate right-sidebar
gsap.from('.content .sidebar-right', {
  duration: 1,
  x: '-100vw',
  delay: 1,
  ease: 'power2.in',
});

// animage left-sidebar
gsap.from('.content .sidebar-left', { duration: 1, delay: 1.5, x: '-100vw' });

// animate footer
gsap.to('footer', { duration: 1, delay: 2.5, y: 0, ease: 'elastic' });

// animate button
gsap.fromTo(
  '.content .button',
  { opacity: 0, scale: 0, rotation: 720 },
  { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
);
