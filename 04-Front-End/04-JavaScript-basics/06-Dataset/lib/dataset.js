const dataset = (element) => {
  // TODO: return the element's data attributes in an object
  // store dataset html in javascript variabel so you have acces to all the data html attributes
  element = document.querySelector(element);
  for (i = 0; Object.keys(element.dataset.length); i++) {
    if (/^\d+$/.test(Object.values(element.dataset))) {
      Object.values(element.dataset) = parsInt(Object.values(element.dataset), 10);
    }
  }
  return element;
  // iterate over the dataset and store them in an object.
  // make sure to convert strings with 0123456789 to integers
};

module.exports = dataset; // Do not remove.


// return data set into an object. Example dataset:


// function isInteger(value) {
//   return /^\d+$/.test(value);
// }



// var size = Object.keys(myObj).length;