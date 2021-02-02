const batch = 449; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";
// Your turn to code!
// 1. fetch messages // 1. add a click event which refresh the page
const results = document.querySelector("#messages");
// 2. build a click event
const button = document.querySelector("#refresh");

const refreshChat = () => {
  fetch(`${baseUrl}${batch}/messages`)
    .then(response => response.json())
    .then((data) => {
      data.messages.forEach((result) => {
        const timeDifference = Math.round((new Date() - new Date(result.created_at)) / 60000);
        const message = `<p>${result.content} posted <span class="date">(${timeDifference} minutes ago</span>)  by ${result.author}</li><li class="list-inline-item"></p>`;
        results.insertAdjacentHTML("afterbegin", message);
      });
    });
};

button.addEventListener("click", refreshChat);

// Post request
const sendButton = document.querySelector(".btn");
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(`${baseUrl}${batch}/messages`, {
    method: "post",
    body: JSON.stringify({
      author: document.querySelector("#your-name").value, content: document.querySelector("#your-message").value
    })
  })
    .then(response => response.json())
    .then((data) => {
      window.location.reload(true);
    });
});

setInterval(refreshChat, 5000);
