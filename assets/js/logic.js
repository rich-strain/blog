//Set variables themeIcon and container
const switchThemeIcon = document.querySelector('#switchThemeIcon');
const container = document.querySelector('.container');

// Set default mode to dark
let theme = 'light';

// Listen for a click event on toggle switch
switchThemeIcon.addEventListener('click', function (event) {
  event.preventDefault();
  // If mode is dark, apply light background
  if (theme === 'dark') {
    theme = 'light';
    container.setAttribute('class', 'light');
    switchThemeIcon.setAttribute('class', 'fas fa-sun');
    console.log('Dark Mode');
  }
  // If mode is light, apply dark background
  else {
    theme = 'dark';
    container.setAttribute('class', 'dark');
    switchThemeIcon.setAttribute('class', 'fas fa-moon');
  }
});
