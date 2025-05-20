import "./style.css";
import { giveCardButton, standButton, playAgainButton, whatIfButton, play, stand, playAgain, whatIf } from './ui';


// AddEventListener para llamar a la función "PLAY" cuando se clicke en el botón:
if (giveCardButton !== null && giveCardButton !== undefined && giveCardButton instanceof HTMLButtonElement) {
    giveCardButton.addEventListener("click", play);
 };
 
 // AddEventListener para cuando se clicke en "PLANTARSE": llama a la función del mismo nombre:
 if(standButton instanceof HTMLButtonElement) {
         standButton.addEventListener("click", stand);
 }
 
 // AddEventListener para botón "Jugar de nuevo":  llama a la función del mismo nombre:
 if(playAgainButton instanceof HTMLButtonElement) {
     playAgainButton.addEventListener("click", playAgain);
 }

 // AddEventListener para cuando se clicke en el botón "¿Qué pasaría si...?": llama a función del mismo nombre:
 if(whatIfButton instanceof HTMLButtonElement) {
     whatIfButton.addEventListener("click", whatIf);
 }