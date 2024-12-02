// New Navbar js start

// Select hamburger menu and nav links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Add event listener for click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// New Navbar js end

// Smooth Scroll start

// Function to determine the responsive offset
function getResponsiveOffset() {
  if (window.innerWidth < 768) {
    return 32;
  } else if (window.innerWidth < 1200) {
    return 5;
  } else {
    return 2;
  }
}

// Initialize SmoothScroll with a dynamic offset
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  offset: getResponsiveOffset(), // Set initial offset
});

// Update SmoothScroll settings on window resize
window.addEventListener("resize", function () {
  scroll.destroy(); // Destroy the current instance
  scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    offset: getResponsiveOffset(), // Update the offset dynamically
  });
});

// Smooth Scroll end
