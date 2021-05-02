const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const CURR_UR = "currentUser";
const SHOWING = "showing";

function saveName(text) {
  localStorage.setItem(CURR_UR, text);
}
function handlSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  patinGreeting(currentValue);
  saveName(currentValue);
}
function askforName() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handlSubmit);
}
function patinGreeting(text) {
  form.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentName = localStorage.getItem(CURR_UR);
  if (currentName === null) {
    askforName();
  } else {
    patinGreeting(currentName);
  }
}
function init() {
  loadName();
}

init();
