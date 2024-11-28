// New Navbar js start

// Select hamburger menu and nav links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Add event listener for click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// New Navbar js end
