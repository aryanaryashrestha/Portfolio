function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleProjectDetails(card) {
  const details = card.querySelector('.project-details');
  details.classList.toggle('active');
  
  // Close other open project details
  const allCards = document.querySelectorAll('.project-card');
  allCards.forEach(otherCard => {
    if (otherCard !== card) {
      otherCard.querySelector('.project-details').classList.remove('active');
    }
  });
}

function toggleSkillDropdown(container) {
  // Toggle current container
  container.classList.toggle('active');
  
  // Optional: Close other skill containers when one is opened
  const allContainers = document.querySelectorAll('.skill-container');
  allContainers.forEach(otherContainer => {
    if (otherContainer !== container && otherContainer.classList.contains('active')) {
      otherContainer.classList.remove('active');
    }
  });
}

// Close skill dropdowns when clicking outside
document.addEventListener('click', function(event) {
  const skillContainers = document.querySelectorAll('.skill-container');
  let clickedInside = false;
  
  skillContainers.forEach(container => {
    if (container.contains(event.target)) {
      clickedInside = true;
    }
  });
  
  if (!clickedInside) {
    skillContainers.forEach(container => {
      container.classList.remove('active');
    });
  }
});
