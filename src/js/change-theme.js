const switchToggle = document.querySelector('#theme-switch-toggle');
const indexBody = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchToggle.addEventListener('change', changeBodyTheme);

checkLocalStorage();
checkBodyClass();

function changeBodyTheme(e) {
  checkSwitchToggle();
}

function checkSwitchToggle() {
  if (switchToggle.checked) {
    removeClassFromBody(Theme.LIGHT);
    addClassToBody(Theme.DARK);
    switchToggle.checked = true;

    localStorage.setItem('Theme', Theme.DARK);
  }
  if (!switchToggle.checked) {
    removeClassFromBody(Theme.DARK);
    addClassToBody(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
    switchToggle.checked = false;
  }
}

function addClassToBody(theme) {
  indexBody.classList.add(theme);
}

function removeClassFromBody(theme) {
  indexBody.classList.remove(theme);
}

function checkLocalStorage() {
  const itemLocalStorage = localStorage.getItem('Theme');
  if (itemLocalStorage) {
    indexBody.classList.value = itemLocalStorage;
  }
}

function checkBodyClass() {
  const bodyClassValue = indexBody.classList.value;
  if (bodyClassValue === Theme.DARK) {
    switchToggle.checked = true;
  } else {
    switchToggle.checked = false;
  }
}
