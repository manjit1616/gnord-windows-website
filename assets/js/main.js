const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector("#nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    links.classList.toggle("is-open", !isOpen);
  });
}

const slider = document.querySelector(".banner-slider");

if (slider) {
  const slides = Array.from(slider.querySelectorAll(".banner-slide"));
  const dots = Array.from(slider.querySelectorAll(".banner-dots button"));
  const prev = slider.querySelector(".banner-arrow-prev");
  const next = slider.querySelector(".banner-arrow-next");
  let activeIndex = 0;
  let intervalId;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === activeIndex));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === activeIndex));
  };

  const startSlider = () => {
    window.clearInterval(intervalId);
    intervalId = window.setInterval(() => showSlide(activeIndex + 1), 3000);
  };

  prev?.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    startSlider();
  });

  next?.addEventListener("click", () => {
    showSlide(activeIndex + 1);
    startSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlider();
    });
  });

  showSlide(0);
  startSlider();
}
