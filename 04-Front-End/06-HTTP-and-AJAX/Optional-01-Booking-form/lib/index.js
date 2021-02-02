// TODO: write your code here!

// increase or decrease counter
const datasetCounter = document.querySelector('#counter');
let counter = parseInt(datasetCounter.dataset.count, 10);

const increaseCounter = () => {
  counter += 1;
};

const decreaseCounter = () => {
  if (counter > 2) {
    counter -= 1;
  }
};

// update counter in HTML
const updateCounter = () => {
  document.querySelector("#counter").innerHTML = counter;
};

// calculate price
let price = 0;
const calculatePrice = () => {
  price = counter * 150;
};


// update read only value
const updateReadOnlyValue = () => {
  document.querySelector("#price-input").value = `${price * 100}`;
};

// update price
const updatePrice = () => {
  calculatePrice();
  document.querySelector("#submit").value = `Pay ${price}€`;
};

// add click event plus or min
const sumButton = document.querySelector(".btn.round-bordered.incrementer.sum");

sumButton.addEventListener('click', (event) => {
  increaseCounter();
  updateCounter();
  updatePrice();
  updateReadOnlyValue();
});

const minusButton = document.querySelector(".btn.round-bordered.incrementer.minus");

minusButton.addEventListener('click', (event) => {
  decreaseCounter();
  updateCounter();
  updatePrice();
  updateReadOnlyValue();
});
