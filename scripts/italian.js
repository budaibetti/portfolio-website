import { attachEventListeners } from "./sideBar.js";
import { writeLoop, setElement, stopWriteLoop, sleep } from "./typewriter.js";

const selectIt = document.getElementById("language-two");
const navBar = document.getElementById("navigation");
const welcomePage = document.querySelector(".welcome-page");

function selectItalian() {
  selectIt.addEventListener("click", async () => {
    navBar.innerHTML = `
    <ul class="sidebar">
        <li class="hide-button">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100" fill = "white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </a>
        </li>
        <li>
          <a href="#about">
            <i class="fa-solid fa-address-card"></i>
            Informazioni
        </a>
        </li>
        <li>
          <a href="#portfolio">
            <i class="fa-solid fa-briefcase"></i>
            Portfolio
        </a>
        </li>
        <li>
          <a href="#contact">
            <i class="fa-solid fa-envelope"></i>
            Contatti
        </a>
        </li>

  <li>
    <div id = "expandable" class=" expandable-menu-container">
      <ul>
        <li id="select-language" class="expandable-menu">
          <i class="fa-solid fa-language"></i>
          Seleziona la lingua </li> 
              </ul>
              
      
  
    <div class="expandable-elements">
        <ul class="expandable-language-list">
              <li id="expandable-language-two" class="expandable-element">Inglese</li>
              <li id="expandable-language-three" class="expandable-language-element">Ungherese</li>
           </ul>
        </div>
            
      </ul>

      <ul class="header">
        <li class="hideOnMobile">
          <a href="#about">
            <i class="fa-solid fa-address-card"></i>
            Informazioni
        </a>
        </li>
        <li class="hideOnMobile">
          <a href="#portfolio">
            <i class="fa-solid fa-briefcase"></i>
            Portfolio
        </a>
        </li>
        <li class="hideOnMobile">
          <a href="#contact">
            <i class="fa-solid fa-envelope"></i>
            Contatti
        </a>
        </li>

        <li class="hideOnMobile">
          <div id = "dropdown" class=" dropdown">
            <i class="fa-solid fa-globe"></i>
              <ul class="dropdown-list">
                <li id="language-one" class="language-element language-one">IT </li> 
              </ul>
              
  
            <div class="language-arrow">
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
              </div>
            
  
      <div class="dropdown-elements">
            <ul class="language-list">
              <li id="language-one" class="language-element">EN</li>
              <li id="language-three" class="language-element">HU</li>
            </ul>
        </div>
  </li>

    <li class= "menu-button">
    <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" fill = "white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </a>
  </li>

 
        
 </ul>
    `;
    attachEventListeners();

    welcomePage.innerHTML = `
    <div class="welcome-div">
    <div class="welcome-text"> 
      <div class="benvenuti">
        Benvenuti
      </div> 
     </div>

    <div class="introduction-container">
      <div class="to-my">
        <p class="to-my-typewrite">...nel mio sito</p>
      </div>

      <div class="introduction">
        <p class="my-name-p"> <span class="my-name"> Mi chiamo</span>
          <div class="name-box">
          <div class="lightbar"></div>
          
          <span class="bettina-budai">Bettina Budai</span></p>

        
          </div>
           
      </div>

      <div class="I-am">
         <p >Sono </p><span class="innerIam" id="itTypewriter"></span><span  class= "cursor"id="cursor">|</span>
      </div>
    
    </div>
    
  </div>
   

    <div  class="resume-pic-container">
      <img data-aos="flip-left"
      data-aos-duration="1000"
       class="resume-pic" src="./resume/ResumePicBB.png">
      <div class="button-container">
        <a href="./resume/Bettina Budai- CV.pdf" download="Bettina Budai-CV">
          <button class="download-cv-btn">
            Scarica il CV
            <i class="fa-solid fa-arrow-down"></i>
          </button>
        </a>
     
      <a href="#contact">
        <button class="message-me-btn">
          Scrivimi
          <i class="fa-regular fa-comment-dots"></i>
        </button>
      </a>
      
      </div>
      
    </div>`;
    AOS.init();
    stopWriteLoop();
    await sleep(850);
    const typewriterElement = document.getElementById("itTypewriter");
    setElement(typewriterElement);

    // Clear the typewriter element's text

    typewriterElement.innerText = [];
    const itPhrases = [
      " una traduttrice",
      "un'interprete",
      "un'aspirante sviluppatrice di front-end",
      "una fanatica delle lingue",
    ];
    writeLoop(itPhrases);
  });
}
export { selectItalian };
