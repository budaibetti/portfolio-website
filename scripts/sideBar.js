//accessing the elements of the sidebar

import { selectItalian } from "./italian.js";

selectItalian();

function attachEventListeners() {
  const menuBtn = document.querySelector(".menu-button");
  const sidebar = document.querySelector(".sidebar");
  const hideBtn = document.querySelector(".hide-button");
  const expMenu = document.querySelector(".expandable-menu");
  const languageSelector = document.querySelector(".expandable-language-list");

  function showSideBar() {
    menuBtn.addEventListener("click", () => {
      sidebar.style.display = "flex";
    });
  }

  function hideSidebar() {
    hideBtn.addEventListener("click", () => {
      sidebar.style.display = "none";
      languageSelector.style.display = "none";
    });
  }

  //language options

  function showLangOptions() {
    expMenu.addEventListener("click", () => {
      languageSelector.style.display =
        languageSelector.style.display === "block" ? "none" : "block";
    });
  }
  showSideBar();
  hideSidebar();
  showLangOptions();
}
attachEventListeners();

export { attachEventListeners };
