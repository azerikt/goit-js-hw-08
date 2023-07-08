import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const LOCAL_STORAGE_KEY = 'selectedFilters';

initForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(value, name));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onFormInput(evt) {
  let persistedFilters = localStorage.getItem(LOCAL_STORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(persistedFilters));
}

function initForm() {
  let persistedFilters = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
