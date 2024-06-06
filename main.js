import { counter } from "./scripts/counter.js";
import { writeLoop } from "./scripts/typewriter.js";
import { swipeLeft, swipeRight } from "./scripts/swipe.js";
import {
  showSideBar,
  hideSidebar,
  showLangOptions,
} from "./scripts/sideBar.js";
import { sendMail } from "./scripts/email.js";

//scroll animation library
AOS.init();

//typewriter effect for the welcome page
writeLoop();

//Swipe effect for the travel pictures
swipeLeft();
swipeRight();

//sidebar functions
showSideBar();
hideSidebar();
showLangOptions();

//Work experience counter

setInterval(counter, 1000);

//Sending email
sendMail();
