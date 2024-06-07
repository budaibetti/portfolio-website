//typewriter effect

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let el = null;
let stopLoop = false;

function setElement(element) {
  el = element;
}
document.getElementById("typewriter");

let sleepTime = 100;

const writeLoop = async (phrases) => {
  if (!el) return;

  let curPhraseIndex = 0;
  stopLoop = false;

  while (!stopLoop) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      if (stopLoop) return;
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      if (stopLoop) return;
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
function stopWriteLoop() {
  stopLoop = true;
}

export { writeLoop, setElement, stopWriteLoop, sleep };
