import { userPoints } from './model';
// Variables que enlazan con el id de cada elemento en el HTML:
export const pointsPrinted = document.getElementById("points");
export const giveCardButton = document.getElementById("giveCard");
export const messageUser = document.getElementById("message");
export const standButton = document.getElementById("stand");
export const playAgainButton = document.getElementById("playAgain");
export const whatIfButton = document.getElementById("whatIf");

// Función para imprimir los puntos: 
export const printPoints = () => {
    if(pointsPrinted instanceof HTMLDivElement) {
        pointsPrinted.textContent = userPoints.toString( );
    }
};

// Función para enseñar el mensaje: 
export const showMessage = (message : string ) : void => {
    if(messageUser instanceof HTMLHeadingElement) {
        messageUser.textContent = message;
    }
}

// Función para enseñar carta:
export const showCard = ( card: number) : void =>  {
    const imageCard = document.getElementById("imageCard");
    if(imageCard instanceof HTMLImageElement) {
        if(card <= 12 && card !== 0) {
            imageCard.src=`./src/assets/images/${card}.jpg`;
        } else imageCard.src=`./src/assets/images/back.jpg`;
    } 
}