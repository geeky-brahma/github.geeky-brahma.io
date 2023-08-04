function checkVisibility(element) {
    const position = element.getBoundingClientRect().top;
    const elementHeight = element.clientHeight;
    const windowHeight = window.innerHeight;
    return position < windowHeight - 0.25 * elementHeight;
  }
  
  function animateOnScroll() {
    const elements = document.querySelectorAll(".skills, .projects, .intro");
    elements.forEach((element) => {
      if (checkVisibility(element)) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      } else {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
      }
    });
  }
  
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();
  