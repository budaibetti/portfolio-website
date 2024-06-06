//accessing the button elements

const likeBtn = document.querySelector(".like-btn");
const dislikeBtn = document.getElementById("dislike-btn");

//Swipe effect
let activeIndex = 0;

const photoGroup = document.getElementsByClassName("travel-cards");

//swiping right
function swipeRight() {
  likeBtn.addEventListener("click", () => {
    const nextIndex =
      activeIndex + 1 <= photoGroup.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(
        `[data-index= "${activeIndex}"]`
      ),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });
  });
}

//Swiping left
function swipeLeft() {
  dislikeBtn.addEventListener("click", () => {
    const nextIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : photoGroup.length - 1;

    const currentGroup = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });
  });
}
export { swipeRight, swipeLeft };
