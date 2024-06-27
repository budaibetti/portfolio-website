import { writeLoop, setElement, stopWriteLoop, sleep } from "./typewriter.js";
import { selectItalian } from "./italian.js";
import { selectHungarian } from "./hungarian.js";
import { attachEventListeners } from "./sideBar.js";
import { swipeEffect } from "./swipe.js";

const hobbySection = document.querySelector(".hobbies-section");

// Save the original content of the sections
const originalContent = {};
document.addEventListener("DOMContentLoaded", function () {
  // Initialize originalContent when the DOM is fully loaded
  originalContent.section1 = document.getElementById("section1").innerHTML;
  originalContent.section2 = document.getElementById("section2").innerHTML;
  originalContent.section3 = document.getElementById("section3").innerHTML;
  originalContent.section4 = document.getElementById("about").innerHTML;
  originalContent.section5 = document.getElementById("section5").innerHTML;
  originalContent.section6 = document.getElementById("portfolio").innerHTML;
  originalContent.section7 = document.getElementById("contact").innerHTML;

  // Initialize the English selection functionality
  attachEventListeners();

  selectEnglish();
});

function selectEnglish() {
  const selectEn = document.querySelectorAll(".enSelected");

  selectEn.forEach((enElement) => {
    enElement.addEventListener("click", async () => {
      console.log("clicked");
      document.getElementById("section1").innerHTML = originalContent.section1;
      document.getElementById("section2").innerHTML = originalContent.section2;
      document.getElementById("section3").innerHTML = originalContent.section3;
      document.getElementById("about").innerHTML = originalContent.section4;
      hobbySection.innerHTML = originalContent.section5;
      document.getElementById("portfolio").innerHTML = originalContent.section6;
      document.getElementById("contact").innerHTML = originalContent.section7;

      stopWriteLoop();
      await sleep(1500);
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
      attachEventListeners();
      swipeEffect();
      selectItalian();
      selectHungarian();
    });
  });
}

export { selectEnglish, hobbySection };
