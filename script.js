const likeBtn = document.querySelector(".like-btn");
const dislikeBtn = document.getElementById("dislike-btn");

//Work-experience counter elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

//scroll animation library
AOS.init();

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

//Work experience counter

const startDay = "12 Sep 2022";

function counter() {
  const startDate = new Date(startDay);
  const currentDate = new Date();

  const totalSeconds = new Date(currentDate - startDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.round(totalSeconds / 60) % 60;
  const seconds = Math.round(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0 ${time}` : time;
}

setInterval(counter, 1000);

counter();

//Checking the email address
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//CONTACT FORM FUNCTION

function sendMail(event) {
  event.preventDefault();
  let parms = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  //Making sure the fields are not empty
  if (parms.name === "" || parms.email === "" || parms.message === "") {
    alert(
      "Please fill in the blank fields\n Si prega di compilare i campi vuoti \n Töltse ki az üres mezőket"
    );
  }
  //Validating the email address
  if (!validateEmail(parms.email)) {
    alert(
      "Please enter a valid email address \n Inserite un indirizzo e-mail valido \n Kérjük, érvényes e-mail címet adjon meg"
    );
    return; // Stop further execution if email is invalid
  } else {
    emailjs
      .send("service_ddc0r7a", "template_5bc79in", parms)
      .then(alert("Email Sent\n L'e-mail è stata inviata\n Üzenet elküldve"));
  }
}
