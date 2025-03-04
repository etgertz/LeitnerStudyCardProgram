/*const LeitnerSystem = require("./LeitnerSystem");
const Deck = require("./Deck");
const StudyCard = require("./StudyCard");
const Bin = require("./Bin");
const activeBin = 0;*/
//const activeDeck;

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

document.addEventListener("DOMContentLoaded", function () {
  generateButtons(); // Call function when page loads
});

document.getElementById("bins").addEventListener("input", function () {
  generateButtons(); // Also update when input changes
});

function generateButtons(){
  const inputField = document.getElementById("bins");
  let value = parseInt(inputField.value, 10);
  if (value > 5) {
    inputField.value = 5; // Force value back to max
  } else if (value < 1 || isNaN(value)) {
    inputField.value = 1; // Ensure minimum is 1
  }

  let buttonCount = parseInt(document.getElementById("bins").value); // Get the number (1 to 5)
  let container = document.getElementById("bin_button_container");

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