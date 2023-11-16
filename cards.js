const allCards = document.querySelectorAll(".card");
let firstCard = null,
  secondCard = null;

let canClick = true;
let score = 0;

allCards.forEach((card) => {
  card.addEventListener("click", handleCardsClicked);
});

function handleCardsClicked() {
  if (!canClick) return;
  // Prevent card Double Click
  if (this.classList.contains("filp")) return;
  this.classList.add("filp");

  if (!firstCard) {
    firstCard = this;
  } else if (!secondCard) {
    secondCard = this;
  }

  let img1 = firstCard ? firstCard.firstElementChild.src : null;
  let img2 = secondCard ? secondCard.firstElementChild.src : null;

  //    Handle Matching Condition
  if (img1 === img2) {
    console.log("Matching");

    firstCard = null;
    secondCard = null;

    score++;
    if (score === 6) handeGameOver();
  }
  //    Handle Non Matching Condition
  else if (img1 && img2) {
    canClick = false;
    setTimeout(() => {
      firstCard.classList.remove("filp");
      secondCard.classList.remove("filp");
      firstCard = null;
      secondCard = null;
      canClick = true;
    }, 2000);
  }
}
function handeGameOver() {
  setTimeout(() => {
    let retVal = confirm("You Win 😍😍\nPlay Again ???");
    if (retVal === true) {
      location.reload();
    }
  }, 1000);
}
// Shuffle Cards
allCards.forEach((card) => {
  let randPos = Math.floor(Math.random() * 12);
  card.style.order = randPos;
});
