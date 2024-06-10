//Set variables themeIcon and container
const currentTheme = localStorage.getItem('theme');
const switchElem = document.querySelector('#theme-switch');

// function to set them within the icon element
const setTheme = (isDark) => {
  if (isDark) {
    switchElem.classList.add('is-dark');
    switchElem.querySelector('i').innerText = 'light_mode';
    switchElem.title = 'Switch to light mode';
    console.log('End of is-dark if statement');
  } else {
    switchElem.classList.remove('is-dark');
    switchElem.querySelector('i').innerText = 'dark_mode';
    switchElem.title = 'Switch to dark mode';
    console.log('End of is-light if statement');
  }
};

if (switchElem) {
  // Load
  if (currentTheme) setTheme(true);
  // Change
  switchElem.addEventListener('click', (e) => {
    e.preventDefault();
    if (!switchElem.classList.contains('is-dark')) {
      // Dark Theme
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setTheme(true);
    } else {
      // Light Theme
      document.documentElement.removeAttribute('theme');
      localStorage.removeItem('theme');
      setTheme(false);
    }
  });
}
