import { attachEventListeners } from "./sideBar.js";
import { writeLoop, setElement, stopWriteLoop, sleep } from "./typewriter.js";
import { addCounter } from "./counter.js";
import { emailDelivery } from "./email.js";
import { selectHungarian } from "./hungarian.js";

const navBar = document.getElementById("navigation");
const welcomePage = document.querySelector(".welcome-page");
const aboutPage = document.getElementById("about");
const workExperience = document.querySelector(".work-experience-counter");
const hobby = document.querySelector(".hobby");
const portfolioPage = document.getElementById("portfolio");
const contactPage = document.getElementById("contact");

let selectedEn = false;

function selectItalian() {
  const selectIt = document.querySelectorAll(".itSelected");
  selectIt.forEach((itelement) =>
    itelement.addEventListener("click", async () => {
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
              <li id="expandable-language-three" class="expandable-language-element huSelected">Ungherese</li>
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
              <li id="language-three" class="language-element huSelected">HU</li>
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
     <h1 class="section-title">Informazioni </h1>

  <div data-aos="fade-right" 
      data-aos-duration="1000"
      class="language-knowledge">
        <p class="skills-title">Competenze Linguistiche</p>
        <p class="lang">
          Ungherese <span class="level it-level">Madrelingua</span>
        </p>
       <p class="lang">
        Inglese <span class="level advanced advanced-it">C1</span>
      </p> 
        <p class="lang">
          Italiano: <span class="level advanced1 advanced-it1">C1</span>
        </p>
        <p class="lang">
          Spagnolo: <span class="level beginner beginner-it">A1</span>
        </p>
      </div>

      <div data-aos="fade-left"
      data-aos-duration="1000"
      class="frontend-knowledge">
        <p class="skills-title"> Competenze di sviluppo front-end</p>
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
        
          <h3 class="experience-title">Esperienze di traduzione</h3>

        

        <p>Ho una vasta esperienza nella traduzione, avendo lavorato su diversi tipi di testo in vari settori. I miei progetti comprendono:
          <ul class="text-type-list it-list">
            <li>
              <span class="text-type">Sopratitoli per uno spettacolo teatrale:</span><br> In particolare, “Andrea Pass: Il finale", dove la precisione e il tempismo erano fondamentali.
              
            </li>
            <li>
              <span class="text-type">Manuali d'uso per forni industriali:</span><br> Mi sono occupata della traduzione di un linguaggio tecnico, mantenendo chiarezza e precisione.
            </li>
            <li>
              <span class="text-type">Studi storici:</span><br> Mi sono impegnata a garantire la fedeltà al contesto storico e alla terminologia.
            </li>
            <li>
              <span class="text-type">Siti web:</span><br> Ho adattato i contenuti per le piattaforme online mantenendo lo stile e il tono originali. Questo sito web, ad esempio, è attualmente disponibile in tre lingue: inglese, italiano e ungherese.
            </li>
            <li>
              <span class="text-type">Linee guida</span><br> Ho tradotto informazioni mediche complesse, come il “ Documento di posizione - Coinvolgimento dei rappresentanti dei genitori nella ricerca neonatale”, in un linguaggio chiaro e accessibile.

            </li>
          </ul>
          Questa esperienza diversificata mi ha dotato di un ampio repertorio di competenze e di un approccio adattabile alla traduzione.</p>

      </div>`;
      workExperience.innerHTML = `
         <div class="work-experience-title">
        <h2> <span class="current-workplace">Attuale posto di lavoro</span> <br> Tech Mahindra - Team <span class="team-name">Italiano</span> </h2><br>
        <h3>Lavoro qui da</h3>
      </div>

      <div class="counter-container">
        <div class="days counter-element"> <p id="days">0</p> 
          <span class="time-unit">giorni</span>
        </div>
        <div class="hours counter-element"> <p id="hours">00</p>
          <span class="time-unit">ore</span>
        </div>
        <div class="minutes counter-element"><p id="minutes">00</p> 
          <span class="time-unit">minuti</span>
        </div>
        <div class="seconds counter-element" ><p id="seconds">00</p>
           <span class="time-unit">secondi</span>
          </div>
        </div>

           <div class="work-activity">
            <h3>In questo periodo ho</h3>
            <ul class="work-activity-list">
              <li>Lavorato a <span class="activity-number">10+</span> progetti</li>
              <li> Avuto <span class= "activity-number">100+</span> meeting di lavoro</li>
              <li>Annotato <span class= "activity-number">1000+</span> query</li>
              <li>Consumato<span class= "activity-number"> 10K+ </span> caffè</li>
            </ul>
           </div>
          
      `;
      addCounter();
      hobby.innerHTML = `
    <h3>Interessi</h3>
        <ul class="hobbies-list">
          <li class="hobby-list"> Fare coding</li>
          <li class="hobby-list">Yoga</li>
          <li class="hobby-list">Viaggiare</li>
        </ul>
    `;
      portfolioPage.innerHTML = `
     <h2 class="projects-title">I miei progetti </h2>

      <div class="portfolio-container it-portfolio-container">

      <div data-aos="flip-right" 
      data-aos-duration="1000" class="work portfolio1 it-portfolio1">
        <img class="project-pic recipe-pic it-recipe-pic" src="./images/Recipe-app.png">
        <h3 class="app-title recipe-app-title it-title">App per ricette</h3>
        <p class="app-description recipe-descr it-descr">Realizzata con <span class="prog-lang">React.js</span>, questa applicazione fornisce un ampio database culinario per gli appassionati di cucina che cercano varietà e convenienza. Gli utenti possono  <span class="slogan">cercare</span> in modo efficiente ricette personalizzate in base ai loro gusti e alle loro esigenze dietetiche, salvando le loro preferite in <span class="slogan"> una raccolta personalizzata </span> con un solo "like".  L'applicazione offre un'interfaccia fluida e facile da usare per scoprire nuovi piatti e tornare alle ricette preferite. <span class="slogan">"Metti Like, Mangia, Ama, Ripeti"</span> – trasformando ogni pasto in una piacevole esperienza.</p>

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
        <h3 class="app-title word-app-title it-word-title">Parola del giorno</h3>
        <p class="app-description word-app-descr it-word-descr">Sviluppata utilizzando <span class="prog-lang">Vanilla JavaScript</span>,  l'app Parola del giorno presenta ogni giorno una nuova selezione di parole in  <span class="slogan">inglese, italiano, e ungherese</span>, perfetta per gli appassionati di lingue che desiderano ampliare il proprio repertorio linguistico.  Approfondite le sfumature di ogni parola con definizioni complete, frasi di esempio contestuali e nozioni d'uso. Create la vostra <span class="slogan">collezione personale</span> di parole preferite  per un apprendimento e una conoscenza continui. Grazie all'interfaccia intuitiva, l'esplorazione di queste lingue e l'ampliamento del vocabolario diventano parte integrante della vostra routine quotidiana</p>

        <a  class=" repo-link">
          <button class="project-demo-btn word-btn demo word-demo it-word-demo">Demo</button>

        </a>

        <a class="repo-link" href="https://github.com/budaibetti/daily-word-generator" target="_blank">
          <button class="project-github-btn word-btn it-word-git">Github</button>

        </a>
      </div>
      
    </div>
    `;

      contactPage.innerHTML = `
      <h3 class="getInTouch inviaMessaggio">Invia 
        <span class="in"> un </span> 
        messaggio</h3>

      <div class="contactIcons it-contactIcons">
        <a href="https://www.facebook.com/budaibett/" target="_blank"><i data-aos="fade-right"
          data-aos-duration="1500"
          class="fa-brands fa-square-facebook">
        </i>
        </a>
        <a href="https://www.linkedin.com/in/bettina-budai-16765a2b9/" target="_blank">
          <i data-aos="fade-left"
          data-aos-duration="1500"class="fa-brands fa-linkedin">

          </i>
        </a>
        <a href="https://github.com/budaibetti" target="_blank">
          <i data-aos="fade-right"
          data-aos-duration="1500" class="fa-brands fa-github"></i>
        </a>
       
      </div>

      <div   class="contact-container it-contact-container">
        
        <form  class="contact-form">
        
          <div class="inputBox">
            <input type="text" id="contactName"  class="contact-inputs name-input" required>
          <span> Nome</span>
          </div>
          
          <div class="inputBox">
            <input type="email"  id="email"  class="contact-inputs email-input" required>
        <span>Indirizzo e-mail </span>
          </div>

        <div class="inputBox">
          <textarea id="message"  class="contact-inputs message-area" required></textarea>
          <span class="message-span">Messaggio</span>
        </div>
        
        <button type="submit" class="submit-btn">Invia</button>
        </form>
        
        
      </div>
    `;
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
      await sleep(1300);
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
      emailDelivery();
      selectHungarian();
    })
  );
}
export {
  selectItalian,
  navBar,
  aboutPage,
  welcomePage,
  workExperience,
  hobby,
  portfolioPage,
  contactPage,
};
