const navSlide = () => {
  const burger = document.querySelecter('.burger');
  const nav = docuument.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });                     
}

navSlide();
