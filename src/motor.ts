import { userPoints, updateUserPoints, typeMessage } from './model';
import { pointsPrinted, giveCardButton, messageUser, standButton, playAgainButton, whatIfButton } from './main';

updateUserPoints(0);

// Función que genera el número aleatorio entre el 1 y el 9:
export const randomNum = ( ) => Math.floor(Math.random() *10) +1;

// Función que genera la carta dependiendo del número aleatorio. Cartas de la 1 a la 7 y, si es mayor que 7, sumará 2 para crear el 10, 11 y 12:
export const getCard = (num : number ) : number =>  num>7 ? num + 2 : num;

// Función para conseguir el número de la carta. De la 1-7, mismo valor, mayor que 7, 0.50 puntos:
export const getPointsCard = (num : number ) : number => num>7 ? 0.50 : num;

// Función para acumular puntos totales:
export const getTotalPoints = (points : number) : number =>  userPoints+points;

// Función para imprimir los puntos: 
export const printPoints = () => {
    if(pointsPrinted instanceof HTMLDivElement) {
        pointsPrinted.textContent = userPoints.toString( );
    }
};

// Función para enseñar carta:
export const showCard = ( card: number) : void =>  {
    const imageCard = document.getElementById("imageCard");
    if(imageCard instanceof HTMLImageElement) {
        if(card <= 12 && card !== 0) {
            imageCard.src=`./src/assets/images/${card}.jpg`;
        } else imageCard.src=`./src/assets/images/back.jpg`;
    } 
}

// Función para conseguir mensaje según los puntos acumulados:
export const getMessage = (totalPoints : number ) : string => {
    if (totalPoints > 7.5) {
        return typeMessage.messageForMore7andHalf;
    } else {
        switch (totalPoints) {
            case 4 : 
            return typeMessage.messageFor4;
            case 5: 
            return typeMessage.messageFor5;
            case 6:
            case 7: 
            return typeMessage.messageFor6and7;
            case 7.5: 
            return typeMessage.messageFor7andHalf;
            default:
            return "";
        }
    } 
}

// Función para enseñar el mensaje: 
export const showMessage = (message : string ) : void => {
    if(messageUser instanceof HTMLHeadingElement) {
        messageUser.textContent = message;
    }
}

// Función para checkear los puntos y según los mismos, llamar a la función de generar mensaje o generar mensaje y enseñarlo si la puntuación acumulada es mayor de 7,50, ya que supondría que el jugador ha perdido. 
export const checkPoints = ( ) => {
    getMessage(userPoints); 
           if (userPoints > 7.5) {
                if(giveCardButton instanceof HTMLButtonElement && standButton instanceof HTMLButtonElement && playAgainButton instanceof HTMLButtonElement) {
                    let message = getMessage(userPoints);
                    showMessage(message);
                    giveCardButton.disabled = true;
                    standButton.disabled = true;
                    playAgainButton.disabled = false;
                    resetPlayButton( );
                }
        }
}


// Función para resetear botón "PLAY" / "Give me a card", según se quiera comenzar la partida o seguir jugando. Si el botón "Jugar de nuevo está habilitado", pondrá "PLAY", y si no "Give me a card":
export const resetPlayButton = ( ) => {
    if(playAgainButton instanceof HTMLButtonElement && giveCardButton instanceof HTMLButtonElement) {
        if(playAgainButton.disabled) {
                giveCardButton.textContent = "Play";
        } else giveCardButton.textContent = "Give me a card";
    }
}


// Función para jugar: genera la carta según número aleatorio, enseña la carta, acumula los puntos, imprime los puntos , resetea el botón de jugar para que pase a "Give me a card" y los chequea para saber qué hacer dependiendo de la cantidad: 
export const play = ( ) => {
    const card = getCard(randomNum());
    showCard(card);
    const pointsCard : number = getPointsCard(card);
    const totalPoints = getTotalPoints(pointsCard);
    updateUserPoints(totalPoints);
    printPoints( );
    if(standButton instanceof HTMLButtonElement && playAgainButton instanceof HTMLButtonElement ) {
        standButton.disabled = false;
        playAgainButton.disabled = false;
    }
    resetPlayButton( );
    checkPoints( );
}