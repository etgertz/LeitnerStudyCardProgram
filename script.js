const activeDeck=null;
const activeBin=null;

import { Bin } from "./Bin.js";
import { StudyCard } from "./StudyCard.js";
import { LeitnerSystem } from "./LeitnerSystem.js";

console.log("Study Card App Loaded!");

const studySystem = new LeitnerSystem();
studySystem.addDeck("test deck");
const myCard = new StudyCard("What is JavaScript?", "A programming language");
studySystem.getDeck("test deck").addCard(myCard);

console.log(studySystem.getDeck("test deck").removeCard());

function displayCard() {}

function wrong() {}

function right() {}

let addButton = document.getElementById("card_add_button");
if(addButton){//adds input cards to deck creation page
  addButton.addEventListener("click", function() {
    let cardDiv = document.createElement("div");
    cardDiv.className="two-column";
    let textarea1 = document.createElement("textarea");
    textarea1.placeholder="Term";
    let textarea2 = document.createElement("textarea");
    textarea2.placeholder="Definition";
    cardDiv.appendChild(textarea1);
    cardDiv.appendChild(textarea2);
    //textarea1.id = terms[terms.length-1].textContent;//probably update with the card number from its deck (ie create card object before hand)
    document.getElementById("card_editor").appendChild(cardDiv);
  });
}

document.addEventListener("DOMContentLoaded", function () {//makes sure proper bins loaded on page load
  generateButtons();
});

let binsInput = document.getElementById("bins")
if(binsInput){
  binsInput.addEventListener("input", function () {
    generateButtons(); // Also update when input changes
  });
}

function generateButtons(){
  const inputField = document.getElementById("bins");
  let container = document.getElementById("bin_button_container");

  if (!inputField || !container) return;//guard clause

  let value = parseInt(inputField.value, 10);
  if (value > 5) {
    inputField.value = 5; // Force value back to max
  } else if (value < 1 || isNaN(value)) {
    inputField.value = 1; // Ensure minimum is 1
  }

  let buttonCount = parseInt(document.getElementById("bins").value); // Get the number (1 to 5)

  container.innerHTML = ""; // Clear existing buttons

  for (let i = 1; i <= buttonCount; i++) {
    let button = document.createElement("button");
    button.textContent = `${i}`; // Set button text
    button.id = "button"+`${i}`;
    button.className = "bin-button"; // Assign a class
    button.addEventListener("click", function () {
        openBin(i);
    });

    container.appendChild(button); // Add button to container
  }
}

function openBin(binNumber){
  //localStorage.setItem("selectedBin", binNumber);//set variable to bin number
  window.location.href = "flashcards.html";
}