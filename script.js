let messages = [
  "Are you sure? 🥺",
  "Really sure?? 😢",
  "Think again 💔",
  "Last chance 😭",
  "You’ll regret this 😏"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Change No button text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Make Yes button bigger
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
