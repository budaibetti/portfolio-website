import { attachEventListeners } from "./sideBar.js";
import { writeLoop, setElement, stopWriteLoop, sleep } from "./typewriter.js";
import { addCounter } from "./counter.js";
import { emailDelivery } from "./email.js";
import {
  navBar,
  aboutPage,
  workExperience,
  hobby,
  portfolioPage,
} from "./italian.js";

//TODO: add welcom and contact page, pass down selectItalian function

const selectHu = document.getElementById("language-three");

function selectHungarian() {
  selectHu.addEventListener("click", () => {
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
            Rólam
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
            Kapcsolat
        </a>
        </li>

  <li>
    <div id = "expandable" class=" expandable-menu-container">
      <ul>
        <li id="select-language" class="expandable-menu">
          <i class="fa-solid fa-language"></i>
          Nyelv kiválasztása  </li> 
              </ul>
              
      
  
    <div class="expandable-elements">
        <ul class="expandable-language-list">
              <li id="expandable-language-two" class="expandable-element">Angol</li>
              <li id="expandable-language-three" class="expandable-language-element">Olasz</li>
           </ul>
        </div>
            
      </ul>

      <ul class="header">
        <li class="hideOnMobile">
          <a href="#about">
            <i class="fa-solid fa-address-card"></i>
            Rólam
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
            Kapcsolat
        </a>
        </li>

        <li class="hideOnMobile">
          <div id = "dropdown" class=" dropdown">
            <i class="fa-solid fa-globe"></i>
              <ul class="dropdown-list">
                <li id="language-three" class="language-element language-one">HU </li> 
              </ul>
              
  
            <div class="language-arrow">
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
              </div>
            
  
      <div class="dropdown-elements">
            <ul class="language-list">
              <li id="language-one" class="language-element">EN</li>
              <li id="language-two" class="language-element">IT</li>
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
    aboutPage.innerHTML = `     
    <h1 class="section-title">Rólam </h1>

 <div data-aos="fade-right" 
     data-aos-duration="1000"
     class="language-knowledge">
       <p class="skills-title">Nyelvi ismeretek</p>
       <p class="lang">
         Magyar <span class="level it-level">Anyanyelv</span>
       </p>
      <p class="lang">
       Angol <span class="level advanced advanced-it">C1</span>
     </p> 
       <p class="lang">
         Olasz <span class="level advanced1 advanced-it1">C1</span>
       </p>
       <p class="lang">
         Spanyol <span class="level beginner beginner-it">A1</span>
       </p>
     </div>

     <div data-aos="fade-left"
     data-aos-duration="1000"
     class="frontend-knowledge">
       <p class="skills-title"> Front-end fejlesztői készségek</p>
       <p class="frontend">
         <i class="fa-brands fa-html5"></i>
       HTML <hr class="level-line">
     </p>
      <p class="frontend">
       <i class="fa-brands fa-css3-alt"></i>
       CSS <hr class="level-line-two">
        </p> 
       <p class="frontend">
         <i class="fa-brands fa-js"></i>
         JavaScript <hr class="level-line-three">
       </p>
       <p class="frontend">
         <i class="fa-brands fa-react"></i>

         React.js <hr class="level-line-four">
       </p>

     </div>

     <div data-aos="zoom-in-up"
     data-aos-duration="2000"
      class="translation-experience">
       
         <h3 class="experience-title">Fordítói tapasztalatok</h3>

       

       <p>Széleskörű fordítási tapasztalattal rendelkezem, számos területen dolgoztam már különböző típusú szövegeken. A munkáim között szerepelnek többek között a következők:
         <ul class="text-type-list it-list">
           <li>
             <span class="text-type">Színházi darab feliratozása</span><br> Nevezetesen Pass Andrea Finálé c. darabja, ahol a precizítás és az időzítés központi szerepet játszott. 
             
           </li>
           <li>
             <span class="text-type">Használati útmutatók ipari kemencékhez:</span><br> Közérthetőségre törekvő szaknyelvi fordítás.
           </li>
           <li>
             <span class="text-type">Történelmi tanulmányok:</span><br> Történelmi összefüggések és terminológia átültetése a célnyelvre.
           </li>
           <li>
             <span class="text-type">Weboldalak:</span><br> Az eredeti stílus és hangvétel megtartása mellett a tartalmat online platformokhoz igazítottam. Jelenleg például ez a weboldal három nyelven érhető el: angolul, olaszul és magyarul.
           </li>
           <li>
             <span class="text-type">Egészségügyi útmutatók:</span><br> Összetett egészségügyi tájékoztatókat, például az „ Position paper - Involvement of parent representatives in neonatal research” (Állásfoglalás a szülők képviselőinek bevonásáról az újszülöttkori kutatásba) című dokumentumot fordítottam le világos és közérthető nyelvre.

           </li>
         </ul>
         A sokrétű tapasztalataim révén széles körű készségekkel rendelkezem, ezáltal a fordítói munkához is rugalmasan tudok alkalmazkodni.
         </p>

     </div>`;
    workExperience.innerHTML = `
     <div class="work-experience-title">
    <h2> <span class="current-workplace">Jelenlegi munkahely</span> <br> Tech Mahindra - <span class="team-name">Olasz</span>Team </h2><br>
    <h3>Ennyi ideje dolgozom itt:</h3>
  </div>

  <div class="counter-container">
    <div class="days counter-element"> <p id="days">0</p> 
      <span class="time-unit">nap</span>
    </div>
    <div class="hours counter-element"> <p id="hours">00</p>
      <span class="time-unit">óra</span>
    </div>
    <div class="minutes counter-element"><p id="minutes">00</p> 
      <span class="time-unit">perc</span>
    </div>
    <div class="seconds counter-element" ><p id="seconds">00</p>
       <span class="time-unit">másodperc</span>
      </div>
    </div>

       <div class="work-activity">
        <h3>Ez idő alatt</h3>
        <ul class="work-activity-list">
          <li> <span class="activity-number">10+</span> projekten dolgoztam már</li>
          <li> <span class= "activity-number">100+</span> meetingen vettem részt</li>
          <li><span class= "activity-number">1000+</span> adatot annotáltam</li>
          <li><span class= "activity-number"> 10K+ </span> kávét fogyasztottam el</li>
        </ul>
       </div>
      
  `;
    addCounter();
    hobby.innerHTML = `
    <h3>Hobbijaim</h3>
        <ul class="hobbies-list">
          <li class="hobby-list"> Programozás</li>
          <li class="hobby-list">Jóga</li>
          <li class="hobby-list">Utazás</li>
        </ul>
    `;
    portfolioPage.innerHTML = `
     <h2 class="projects-title">Munkáim </h2>

      <div class="portfolio-container it-portfolio-container">

      <div data-aos="flip-right" 
      data-aos-duration="1000" class="work portfolio1 it-portfolio1">
        <img class="project-pic recipe-pic it-recipe-pic" src="./images/Recipe-app.png">
        <h3 class="app-title recipe-app-title it-title">Receptkereső alkalmazás</h3>
        <p class="app-description recipe-descr it-descr">A <span class="prog-lang">React.js</span> alapú alkalmazás széles körű kulináris adatbázist kínál a főzés szerelmesei számára, akik változatosságot és kényelmet keresnek. A felhasználók könnyedén <span class="slogan">rákereshetnek</span> a saját ízlésüknek és étkezési szükségleteikhez igazított receptekre, és egyetlen lájkkal elmenthetik kedvenceiket egy <span class="slogan">személyre szabott gyűjteménybe.</span> Az alkalmazás gördülékeny és könnyen kezelhető felületet kínál az új ételek felfedezéséhez és a kedvenc receptek eléréséhez. <span class="slogan">"Lájkold, edd, szeresd, kezdd elölről"</span> – így minden étkezés örömtelivé válik.</p>

        <a class="repo-link">
          <button class="project-demo-btn recipe-btn demo it-recipe-demo">Demo</button>
        </a>
        

        <a class="repo-link " href="https://github.com/budaibetti/recipe-app" target="_blank">
          <button class="project-github-btn recipe-btn it-recipe-btn">
            GitHub
          </button>
        </a>
       
      </div>

      <div data-aos="flip-left" 
      data-aos-duration="1500"
      class="work portfolio2 it-portfolio2"> 
        <img class="project-pic word-app-pic it-word-pic " src="./images/Daily-word-app.png">
        <h3 class="app-title word-app-title it-word-title">Napi szó</h3>
        <p class="app-description word-app-descr it-word-descr">A <span class="prog-lang">Vanilla JavaScript</span> segítségével készült "Napi szó" elnevezésű alkalmazás minden nap új szavakat mutat be <span class="slogan">angol, olasz és magyar nyelven</span>, így ideális a nyelvek szerelmeseinek, akik szeretnék bővíteni a tudásukat.  Merüljön el a szavak rejtelmeiben a részletes definíciók és a példamondatok segítségével. Saját <span class="slogan">gyűjteményt</span> hozhat létre kedvenc szavaiból, elősegítve ezzel a folyamatos tanulást. Az intuitív felhasználói felületnek köszönhetően e nyelvek felfedezése és szókincsének bővítése a mindennapi rutin szerves részévé válik.</p>

        <a  class=" repo-link">
          <button class="project-demo-btn word-btn demo word-demo it-word-demo">Demo</button>

        </a>

        <a class="repo-link" href="https://github.com/budaibetti/daily-word-generator" target="_blank">
          <button class="project-github-btn word-btn it-word-git">Github</button>

        </a>
      </div>
      
    </div>
    `;
    AOS.init();
  });
}
export { selectHungarian };
