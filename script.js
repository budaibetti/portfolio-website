const likeBtn = document.querySelector(".like-btn");
const dislikeBtn = document.getElementById("dislike-btn");

//typewriter effect
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
  "translator",
  "interpreter",
  "aspiring frontend-developer",
  "annotator",
  "language-nerd",
];

const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    console.log(curWord);
    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();

//Swipe effect
let activeIndex = 0;

const photoGroup = document.getElementsByClassName("travel-cards");

//swiping right
likeBtn.addEventListener("click", () => {
  const nextIndex =
    activeIndex + 1 <= photoGroup.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelector(`[data-index= "${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "after";

  nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
});
//Swiping left
dislikeBtn.addEventListener("click", () => {
  const nextIndex =
    activeIndex - 1 >= 0 ? activeIndex - 1 : photoGroup.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGroup.dataset.status = "before";

  nextGroup.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
});

//sidebar
function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";

  const languageSelector = document.querySelector(".expandable-language-list");

  languageSelector.style.display = "none";
}

//language options

function showLangOptions() {
  const languageSelector = document.querySelector(".expandable-language-list");

  languageSelector.style.display =
    languageSelector.style.display === "block" ? "none" : "block";
}
