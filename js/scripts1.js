// Hamburger menu with animation start
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuLinks = menu.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
  menu.setAttribute("aria-hidden", !menu.classList.contains("open"));
});
// Hamburger menu with animation end

// Close menu when a link is clicked start
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menu.classList.toggle("open");
    menu.setAttribute("aria-hidden", !menu.classList.contains("open"));
  });
});

// Close menu when a link is clicked end

// Smooth Scroll start
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  offset: 50,
});

// Smooth Scroll end
