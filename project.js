function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
    section.style.opacity = 0;
  });

  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
    setTimeout(() => {
      activeSection.style.opacity = 1;
    }, 50); // slight delay for smooth transition
  }

  // Update active navigation link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.textContent.toLowerCase() === sectionId) {
      link.classList.add('active');
    }
  });
}

// Show dashboard by default on page load
document.addEventListener('DOMContentLoaded', () => {
  showSection('dashboard');
});