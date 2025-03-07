let activeBin = null;
import { LeitnerSystem } from "./LeitnerSystem.js";
const studySystem = new LeitnerSystem();
/*import { Bin } from "./Bin.js";
import { StudyCard } from "./StudyCard.js";
import { LeitnerSystem } from "./LeitnerSystem.js";

console.log("Study Card App Loaded!");


studySystem.addDeck("test deck");
const myCard = new StudyCard("What is JavaScript?", "A programming language");
studySystem.getDeck("test deck").addCard(myCard);

console.log(studySystem.getDeck("test deck").removeCard());*/

console.log("Study Card App Loaded!");

function displayCard() {}

function wrong() {}

function right() {}

let newDeckButton = document.getElementById("new-deck-button");
if (newDeckButton) {
  newDeckButton.addEventListener("click", () => {
    event.preventDefault(); //to stop page reload
    let name = document.getElementById("deck-name-input").value;
    studySystem.addDeck(name);
    console.log(studySystem.size());

    window.open("edit.html", "_self");
    //open popup to take in deck name
    //make new deck and store as activeDeck
    //open up edit.html
  });
}

let addButton = document.getElementById("card_add_button");
if (addButton) {
  //adds input cards to deck creation page
  addButton.addEventListener("click", () => {
    let cardDiv = document.createElement("div");
    cardDiv.className = "two-column";
    let textarea1 = document.createElement("textarea");
    textarea1.placeholder = "Term";
    let textarea2 = document.createElement("textarea");
    textarea2.placeholder = "Definition";
    cardDiv.appendChild(textarea1);
    cardDiv.appendChild(textarea2);
    //textarea1.id = terms[terms.length-1].textContent;//probably update with the card number from its deck (ie create card object before hand)
    document.getElementById("card_editor").appendChild(cardDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  //makes sure proper bins loaded on page load
  if (studySystem.isEmpty()) {
    const page = window.location.pathname.split("/").pop();

    // Redirect only if they are NOT already on index.html

    if (page !== "index.html" && studySystem.size() === 0) {
      //window.location.href = "index.html";
    }
    // Redirect if no deck exists
  }
  generateButtons();
});

let binsInput = document.getElementById("bins");
if (binsInput) {
  binsInput.addEventListener("input", () => {
    generateButtons(); // Also update when input changes
  });
}

function generateButtons() {
  const inputField = document.getElementById("bins");
  let container = document.getElementById("bin_button_container");

  if (!inputField || !container) return; //guard clause

  let value = parseInt(inputField.value, 10);
  if (value > 5) {
    inputField.value = 5; // Force value back to max
  } else if (value < 1 || isNaN(value)) {
    inputField.value = 1; // Ensure minimum is 1
  }

  let buttonCount = parseInt(inputField.value); // Get the number (1 to 5)

  container.innerHTML = ""; // Clear existing buttons

  for (let i = 1; i <= buttonCount; i++) {
    let button = document.createElement("button");
    button.textContent = `${i}`; // Set button text
    button.id = "button" + `${i}`;
    button.className = "bin-button"; // Assign a class
    button.addEventListener("click", () => {
      openBin(i);
    });

    container.appendChild(button); // Add button to container
  }
}

function openBin(binNumber) {
  //localStorage.setItem("selectedBin", binNumber);//set variable to bin number
  window.location.href = "flashcards.html";
}

/*modal handling*/
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

if (overlay) {
  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
