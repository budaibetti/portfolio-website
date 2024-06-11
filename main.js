import { addCounter } from "./scripts/counter.js";
import { writeLoop, setElement, stopWriteLoop } from "./scripts/typewriter.js";
import { swipeLeft, swipeRight } from "./scripts/swipe.js";
import { attachEventListeners } from "./scripts/sideBar.js";
import { emailDelivery } from "./scripts/email.js";
import { selectItalian } from "./scripts/italian.js";
import { selectHungarian } from "./scripts/hungarian.js";
// Default values shown

//scroll animation library
AOS.init();

selectItalian();
selectHungarian();

//typewriter effect for the welcome page
const initTypewriter = () => {
  stopWriteLoop();
  const enTypeWriterEl = document.getElementById("typewriter");
  setElement(enTypeWriterEl);
  enTypeWriterEl.innerText = [];

  const phrases = [
    "translator",
    "interpreter",
    "aspiring frontend-developer",
    "annotator",
    "language-nerd",
  ];

  writeLoop(phrases);
};

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
});

//Swipe effect for the travel pictures
swipeLeft();
swipeRight();

//sidebar functions
attachEventListeners();

//Work experience counter

setInterval(addCounter, 1000);

//Sending email
emailDelivery();
