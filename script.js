window.addEventListener("scroll", revealOnScroll);

// Function to check if an element is in the viewport
function isInViewport(element, offset) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 - offset &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class to elements in the viewport
function revealOnScroll() {
  const elements1 = document.querySelectorAll(".scroll-animation");
  const elements2 = document.querySelectorAll(".scroll-animation2");
  const offset1 = 100; // Adjust this value to set the desired offset for scroll-animation
  const offset2 = 300; // Adjust this value to set the desired offset for scroll-animation2

  for (let i = 0; i < elements1.length; i++) {
    if (isInViewport(elements1[i], offset1)) {
      elements1[i].classList.add("animate");
    }
  }

  for (let i = 0; i < elements2.length; i++) {
    if (isInViewport(elements2[i], offset2)) {
      elements2[i].classList.add("animate");
    }
  }
}
