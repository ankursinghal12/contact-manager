export function setToLocalStorage(value) {
  window.localStorage.setItem('contacts', JSON.stringify(value));
}

export function fetchFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem('contacts'));
}

export function isEmptyObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== "")
      return false;
  }
  return true;
}
