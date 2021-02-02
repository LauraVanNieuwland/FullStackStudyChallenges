class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Getter
  get firstAndLastName() {
    return this.fullName();
  }
 // Method
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = User; // Do not remove. We need this for the spec to know about your class.
