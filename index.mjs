document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  const titles = [
    "a Web Designer",
    "a Visual Designer",
    "an Application Software Designer", 
    "an Interaction Designer",
    "a Product Designer",
    "an AI Enthusiast",
    "a Content Creator",
  ];

  let index = 0; // Current title index
  let charIndex = 0; // Current character index
  let isDeleting = false; // Track whether we are deleting text
  const speed = 100; // Typing speed (in milliseconds)
  const delayBetweenTitles = 2000; // Delay before starting the next title
  
  function typeText() {
    const dynamicText = document.getElementById("dynamic-text");
  
    // Get the current title to type
    const currentTitle = titles[index];
  
    // Update the dynamic text content
    if (isDeleting) {
      dynamicText.textContent = currentTitle.substring(0, charIndex--);
    } else {
      dynamicText.textContent = currentTitle.substring(0, charIndex++);
    }
  
    // Determine whether to switch between typing and deleting
    if (!isDeleting && charIndex === currentTitle.length + 1) {
      // Pause before deleting
      isDeleting = true;
      setTimeout(typeText, delayBetweenTitles);
    } else if (isDeleting && charIndex === -1) {
      // Move to the next title and start typing
      isDeleting = false;
      index = (index + 1) % titles.length; // Loop back to the first title
      setTimeout(typeText, 500); // Short pause before typing the next title
    } else {
      // Continue typing or deleting
      setTimeout(typeText, speed);
    }
  }
  
  // Start the typewriter effect
  typeText();

document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('active');
});


// Get elements
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");
const closeIcon = document.getElementById("close-icon");

// Show sidebar when hamburger menu is clicked
hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Hide sidebar when close icon is clicked
closeIcon.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

