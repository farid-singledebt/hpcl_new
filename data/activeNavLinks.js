// Select all the sections and navbar links
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-links a");

// Function to remove 'active' class from all links
function removeActiveClasses() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

// Function to add 'active' class to the current section link
function addActiveClass(id) {
  const link = document.querySelector(`.nav-links a[href="#${id}"]`);
  if (link) {
    link.classList.add("active");
  }
}

// Set up the IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove 'active' from all links and add it to the current section's link
        removeActiveClasses();
        addActiveClass(entry.target.id);
      }
    });
  },
  {
    threshold: 0.3, // Adjust this value to determine how much of the section needs to be in view to trigger
  }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
