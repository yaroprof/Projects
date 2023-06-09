 // Add JavaScript code here
 window.addEventListener('load', function() {
  var container = document.querySelector('.parallax-container');
  var content = document.querySelector('.parallax-content');

  function setTransform() {
      var scrollY = container.scrollTop || window.pageYOffset;
      content.style.transform = 'translateZ(-2px) scale(3) translateY(' + scrollY + 'px)';
  }

  container.addEventListener('scroll', setTransform);
  window.addEventListener('resize', setTransform);
  setTransform();
});