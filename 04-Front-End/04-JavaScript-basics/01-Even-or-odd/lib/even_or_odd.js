const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
  // TODO: this should return "even" if the number is even, "odd" otherwise
};

module.exports = evenOrOdd; // Do not remove. We need this for the spec to know about your method.
