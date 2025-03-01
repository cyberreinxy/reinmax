document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const menuIcon = document.getElementById("menu-icon");
  const loader = document.getElementById("loader");
  const loaderText = document.getElementById("loader-text");

  function toggleMenu() {
    navMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
    if (navMenu.classList.contains("open")) {
      menuIcon.src = "assets/images/close-icon.svg";
    } else {
      menuIcon.src = "assets/images/menu-icon.svg";
    }
  }

  hamburger.addEventListener("click", toggleMenu);

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      if (navMenu.classList.contains("open")) {
        toggleMenu();
      }
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuIcon.src = "assets/images/menu-icon.svg";
    });
  });

  // Rotate loader messages
  const loaderMessages = [
    "Encrypting data...",
    "Loading resources...",
    "Optimizing performance...",
    "Finalizing setup..."
  ];

  let messageIndex = 0;

  function rotateLoaderMessages() {
    loaderText.textContent = loaderMessages[messageIndex];
    messageIndex = (messageIndex + 1) % loaderMessages.length;
  }

  setInterval(rotateLoaderMessages, 4000); // Change message every 4 seconds

  // Hide loader when page is fully loaded with a delay
  window.addEventListener("load", function () {
    setTimeout(() => {
      loader.style.display = "none"; // Hide loader after delay
      document.body.style.visibility = "visible"; // Show body content
    }, 2000); // 2 seconds delay
  });

  // Remove download attributes from all images and videos
  const mediaElements = document.querySelectorAll('img[download], video[download]');
  mediaElements.forEach(element => {
    element.removeAttribute('download');
  });
});