document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    let currentIndex = 0;
  
    function showSection(index) {
      sections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
      });
      tabs.forEach((tab, i) => {
        if (i === index) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
      currentIndex = index;
    }
  
    // Show the first section on load
    showSection(0);
  
    // Click event on tabs
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(index);
      });
    });
  
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        let nextIndex = (currentIndex + 1) % sections.length;
        showSection(nextIndex);
      } else if (e.key === 'ArrowLeft') {
        let prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        showSection(prevIndex);
      }
    });
  });