// Variables que se van a usar:
interface MessageOnStanding {
    messageFor4: string;
    messageFor5: string;
    messageFor6and7: string;
    messageFor7andHalf: string;
    messageForMore7andHalf: string;
  }

export let userPoints : number= 0;

export const typeMessage : MessageOnStanding = {
    messageFor4 : "Has sido muy conservador",
    messageFor5 : "Te ha entrado el canguelo eh?",
    messageFor6and7 : "Casi casi...",
    messageFor7andHalf : "¡Lo has clavado! ¡Enhorabuena!",
    messageForMore7andHalf : "GAME OVER",
}

// Variables que enlazan con el id de cada elemento en el HTML:
export const pointsPrinted = document.getElementById("points");
export const giveCardButton = document.getElementById("giveCard");
export const messageUser = document.getElementById("message");
export const standButton = document.getElementById("stand");
export const playAgainButton = document.getElementById("playAgain");
export const whatIfButton = document.getElementById("whatIf");