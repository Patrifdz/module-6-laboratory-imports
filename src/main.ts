import "./style.css";
import { gameData, updateUserPoints } from './model';
import { randomNum, getCard, getMessage, checkPoints, resetPlayButton, play } from './motor';
import { giveCardButton, standButton, playAgainButton, whatIfButton, printPoints, showMessage, showCard } from './ui';

updateUserPoints(0);


// AddEventListener para llamar a la función "PLAY" cuando se clicke en el botón:
if (giveCardButton !== null && giveCardButton !== undefined && giveCardButton instanceof HTMLButtonElement) {
    giveCardButton.addEventListener("click", play);
 };
 
 // AddEventListener para cuando se clicke en "PLANTARSE": chequea puntos, enseña el mensaje según los puntos acumulados, y deshabilita botones de "plantarse" y "dame carta" y habilita función de "¿Qué pasaría si...?" y "Jugar de nuevo":
 if(standButton instanceof HTMLButtonElement) {
    const button = standButton;
         button.addEventListener("click",( ) =>{
         checkPoints( );
         const message = getMessage(gameData.userPoints)
         showMessage(message);
         button.disabled = true;
         if(whatIfButton instanceof HTMLButtonElement && giveCardButton instanceof HTMLButtonElement && playAgainButton instanceof HTMLButtonElement) {
             whatIfButton.disabled = false;
             giveCardButton.disabled = true;
             playAgainButton.disabled = false;
         }
     });
 }
 
 // AddEventListener para botón "Jugar de nuevo": resetea a los valores inciales, habilita botón "Give me a card" y deshabilita botones "¿Qué pasaría si...?", "Jugar de nuevo" y "Plantarse", y resetea el botón "Give me a card" para que indique "PLAY":
 if(playAgainButton instanceof HTMLButtonElement) {
     playAgainButton.addEventListener("click", ( ) => {
         updateUserPoints(0);
         printPoints( );
         const message = getMessage(gameData.userPoints);
         showMessage(message);
         showCard(gameData.userPoints);
         if(giveCardButton instanceof HTMLButtonElement && whatIfButton instanceof HTMLButtonElement && playAgainButton instanceof HTMLButtonElement && standButton instanceof HTMLButtonElement) {
             giveCardButton.disabled = false;
             whatIfButton.disabled = true;
             playAgainButton.disabled = true;
             standButton.disabled = true;
         }
         resetPlayButton( );
     })
 }
 
 // AddEventListener para cuando se clicke en el botón "¿Qué pasaría si...?": genera carta con el valor de la función número aleatorio y la enseña:
 if(whatIfButton instanceof HTMLButtonElement) {
     whatIfButton.addEventListener("click", ( ) => {
         const card = getCard(randomNum( ));
         showCard(card);
     });
 }
 