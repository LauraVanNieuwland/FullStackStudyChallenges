// TODO: React to a click on the button!
const button = document.querySelector('#clickme');

button.addEventListener('click', event => {
  button.disabled = true;
  button.innerText = "Bingo";
});
