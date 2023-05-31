window.addEventListener('scroll', function() {
  var parallaxBg = document.querySelector('.parallax-bg');
  var scrolled = window.pageYOffset;
  parallaxBg.style.transform = 'translateY(' + (scrolled * 0.4) + 'px)';
});
