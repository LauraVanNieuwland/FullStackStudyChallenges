/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  return Math.random() > 0.8;
};

const newMessage = () => {
  const sample = array => array[Math.floor(Math.random() * array.length)];
  const sendersArray = ['Jan van Nieuwland', 'Willem Alexander', 'Paul', 'Ruud'];
  const arraySubjects = ['Familie uitje', 'Kom eens hier heen!', 'Leuke boeken', 'Verven 13 februari'];
  return {
    sender: sample(sendersArray),
    subject: sample(arraySubjects)
  };

  // TODO: return a random message as an object with two keys, subject and sender
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  let text = 
  `<div class="row message unread">
    <div class="col-3">${message.sender}</div>
    <div class="col-9">${message.subject}</div>
  </div>`;
  document.querySelector("#inbox").insertAdjacentHTML('afterbegin', text);
};

const updateCounter = () => {
  let counter = document.querySelectorAll(".message.unread").length;
  document.querySelector("#count").innerText = `(${counter})`;
  document.title = `Inbox ${counter}`;  
};

const refresh = () => {
  if (newMessage()) {
    appendMessageToDom(newMessage());
    updateCounter();
  }
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
};


// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
