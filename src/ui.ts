import { gameData, updateUserPoints } from './model';
import { randomNum, getCard, getPointsCard, getTotalPoints, getMessage } from './motor';
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
        pointsPrinted.textContent = gameData.userPoints.toString( );
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


// Función para checkear los puntos y según los mismos, llamar a la función de generar mensaje o generar mensaje y enseñarlo si la puntuación acumulada es mayor de 7,50, ya que supondría que el jugador ha perdido. 
export const checkPoints = ( ) => {
    getMessage(gameData.userPoints); 
           if (gameData.userPoints > 7.5) {
                if(giveCardButton instanceof HTMLButtonElement && standButton instanceof HTMLButtonElement && playAgainButton instanceof HTMLButtonElement) {
                    let message = getMessage(gameData.userPoints);
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

// Funcion para PLANTARSE: chequea puntos, enseña el mensaje según los puntos acumulados, y deshabilita botones de "plantarse" y "dame carta" y habilita función de "¿Qué pasaría si...?" y "Jugar de nuevo":
export const stand =( ) => {
    checkPoints( );
         const message = getMessage(gameData.userPoints)
         showMessage(message);
         if(standButton instanceof HTMLButtonElement && whatIfButton instanceof HTMLButtonElement && giveCardButton instanceof HTMLButtonElement && playAgainButton instanceof HTMLButtonElement) {
             standButton.disabled = true;
             whatIfButton.disabled = false;
             giveCardButton.disabled = true;
             playAgainButton.disabled = false;
         }
}

// Funcion "JUGAR DE NUEVO": resetea a los valores inciales, habilita botón "Give me a card" y deshabilita botones "¿Qué pasaría si...?", "Jugar de nuevo" y "Plantarse", y resetea el botón "Give me a card" para que indique "PLAY":
export const playAgain = ( ) => {
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
}

// Función "¿Qué pasaría si...?": genera carta con el valor de la función número aleatorio y la enseña:
export const whatIf = ( ) => {
        const card = getCard(randomNum( ));
        showCard(card);
}