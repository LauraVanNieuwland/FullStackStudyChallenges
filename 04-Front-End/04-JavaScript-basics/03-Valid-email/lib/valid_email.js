const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  return /^[^@]+@\w+(\.\w+)+\w$/.test(email);
};

module.exports = valid; // Do not remove.
