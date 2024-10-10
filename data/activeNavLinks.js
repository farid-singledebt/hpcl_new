document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".nav-links li a");

  // Function to remove 'active' class from all links
  function removeActiveClasses() {
    navbarLinks.forEach((link) => link.classList.remove("active"));
  }

  // Callback for when a section enters the viewport
  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        removeActiveClasses();

        // Add 'active' class to the corresponding nav link
        navbarLinks.forEach((link) => {
          if (link.getAttribute("href").substring(1) === sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // IntersectionObserver options
  const observerOptions = {
    root: null, // observes in the viewport
    threshold: 0.6, // triggers when 60% of the section is visible
  };

  // Function to initialize observer for all sections
  function observeSections() {
    const sections = document.querySelectorAll(".section"); // Ensure sections are dynamically fetched
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      observer.observe(section); // Observe both static and dynamically loaded sections
    });
  }

  // Initialize observer for static sections
  observeSections();

  // Example: Dynamically render content (simulated)
  function renderDynamicContent() {
    const dynamicSection = document.querySelector("#dynamic-section");
    if (dynamicSection) {
      // Inject dynamic content
      dynamicSection.innerHTML = "<p>Dynamic content loaded...</p>";

      // Reinitialize observer after dynamic content is added
      observeSections();
    }
  }

  // Simulate dynamic content loading after 2 seconds
  setTimeout(renderDynamicContent, 5000);
});
