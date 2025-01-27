



document.addEventListener('scroll', function() {
  const airCircle = document.getElementById('air-circle');
  const homeSection = document.getElementById('home');
  const scrollPosition = window.scrollY || window.pageYOffset;

  const homeSectionHeight = homeSection.offsetHeight;

  if (scrollPosition > homeSectionHeight) {
      airCircle.classList.add('visible');
  } else {
      airCircle.classList.remove('visible');
  }
});