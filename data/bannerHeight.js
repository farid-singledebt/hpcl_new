$(document).ready(function () {
  // Function to set the carousel height
  function setCarouselHeight() {
    const header = document.querySelector("header");
    const navbar = document.querySelector("nav");
    const carousel = document.querySelector("#banner-carousel");

    // Get viewport height
    const viewportHeight = window.innerHeight;

    // Get the total height of the navbar
    const navbarHeight = navbar.offsetHeight;

    let carouselHeight;

    // Check if the screen width is greater than 992px
    if (window.innerWidth > 992) {
      // If screen size is greater than 992px, include header height in the calculation
      const headerHeight = header.offsetHeight;
      carouselHeight = viewportHeight - headerHeight - navbarHeight;
    } else {
      // If screen size is less than or equal to 992px, exclude header height
      carouselHeight = viewportHeight - navbarHeight;
    }

    // Set the height of the carousel
    carousel.style.height = `${carouselHeight}px`;

    // Set the height of the carousel images
    const carouselItems = document.querySelectorAll(".banner-item img");
    carouselItems.forEach((item) => {
      item.style.height = `${carouselHeight}px`;
      item.style.objectFit = "cover";
    });
  }

  // Trigger the function immediately when the document is ready and on window events
  setCarouselHeight(); // Run on document ready
  window.addEventListener("load", setCarouselHeight); // Ensure it runs on load
  window.addEventListener("resize", setCarouselHeight); // Trigger on resize
});
