// TODO: Autocomplete the input with AJAX calls.
// const input = document.querySelector("#search").value;
// set const inject html
let list = document.querySelector("#results");

// insert results into html
const insertWord = (data) => {
  data.words.forEach((result) => {
    const woord = `<li>${result}</li>`;
    list.insertAdjacentHTML('beforeend', woord);
  });
};

// get api information
const fetchWords = (query) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${query}`)
    .then(response => response.json())
    .then(insertWord);
};

// get input from searchfield by key event
const input = document.querySelector("#search");
input.addEventListener('keyup', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  // const input = document.querySelector('#search-input');
  fetchWords(input.value);
});
