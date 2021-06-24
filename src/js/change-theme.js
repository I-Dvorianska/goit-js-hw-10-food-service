const switchToggle = document.querySelector('#theme-switch-toggle');
const indexBody = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchToggle.addEventListener('change', changeBodyTheme);

function changeBodyTheme(e) {
  e.preventDefault();

  if (e.target.checked) {
    removeClassFromBody(Theme.LIGHT);
    addClassForBody(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }

  if (!e.target.checked) {
    if (indexBody.classList.contains(Theme.DARK)) {
      removeClassFromBody(Theme.DARK);
    }
    addClassForBody(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function addClassForBody(theme) {
  indexBody.classList.add(theme);
}

function removeClassFromBody(theme) {
  indexBody.classList.remove(theme);
}

export { switchToggle, indexBody };
