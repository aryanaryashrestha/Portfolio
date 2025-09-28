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
  // Simply toggle the current container - no auto-close of others
  container.classList.toggle('active');
}
