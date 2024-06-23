//accessing the elements of the sidebar

function attachEventListeners() {
  const menuBtn = document.querySelector(".menu-button");
  const sidebar = document.querySelector(".sidebar");
  const hideBtn = document.querySelector(".hide-button");
  const expMenu = document.querySelector(".expandable-menu");
  const languageSelector = document.querySelectorAll(
    ".expandable-language-list"
  );
  const expLangEl = document.querySelectorAll(".expandEl");
  const sideBarEl = document.querySelectorAll(".sidebarEl");

  function showSideBar() {
    menuBtn.addEventListener("click", () => {
      sidebar.style.display = "flex";
    });
  }

  function hideSidebar() {
    hideBtn.addEventListener("click", () => {
      sidebar.style.display = "none";
      //languageSelector.style.display = "none";
    });
    expLangEl.forEach((expLangElement) => {
      expLangElement.addEventListener("click", () => {
        sidebar.style.display = "none";
      });
    });
    sideBarEl.forEach((sidebarElement) => {
      sidebarElement.addEventListener("click", () => {
        sidebar.style.display = "none";
      });
    });
  }

  //language options

  function showLangOptions() {
    expMenu.addEventListener("click", () => {
      console.log("clicked");
      languageSelector.forEach((langElement) => {
        langElement.style.display =
          langElement.style.display === "block" ? "none" : "block";
      });
    });
  }

  showSideBar();
  hideSidebar();
  showLangOptions();
}
attachEventListeners();

export { attachEventListeners };
