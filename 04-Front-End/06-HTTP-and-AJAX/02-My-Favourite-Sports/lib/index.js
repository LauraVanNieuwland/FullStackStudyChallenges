// TODO: write your code here!
const buttons = document.querySelectorAll(".clickable");
// add clickevent to button
const bindSportToClick = (button) => {
  button.addEventListener('click', (event) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
};
buttons.forEach(bindSportToClick);
