// TODO: write your code here

const track1 = document.querySelectorAll("#player1-race td");
const track2 = document.querySelectorAll("#player2-race td");
let counterOne = 0;
let counterTwo = 0;
const trackSize = 28;

//player 1
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 80) {
    track1[counterOne].classList.remove('active');
    track1[counterOne + 1].classList.add('active');
    counterOne += 1;
  }
  if (counterOne === trackSize) {
    alert(`Player 1 wins! Play again?`);
    window.location.reload();
  }
});

// //player 2
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 81) {
    track2[counterTwo].classList.remove('active');
    track2[counterTwo + 1].classList.add('active');
    counterTwo += 1;
  }
  if (counterTwo === trackSize) {
    alert(`Player 2 wins! Play again?`);
    window.location.reload();
  }
});
