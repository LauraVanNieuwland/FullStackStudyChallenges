const sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  let sum = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      sum += number;
    }
  });
  return sum;
};

module.exports = sumOfNegative; // Do not remove.
