import "./style.css";
import { userPoints, typeMessage, pointsPrinted, giveCardButton, messageUser, standButton, playAgainButton, whatIfButton } from './model';

// Función que genera el número aleatorio entre el 1 y el 9:
const randomNum = ( ) => Math.floor(Math.random() *10) +1;

// Función que genera la carta dependiendo del número aleatorio. Cartas de la 1 a la 7 y, si es mayor que 7, sumará 2 para crear el 10, 11 y 12:
const getCard = (num : number ) : number =>  num>7 ? num + 2 : num;

// Función para conseguir el número de la carta. De la 1-7, mismo valor, mayor que 7, 0.50 puntos:
const getPointsCard = (num : number ) : number => num>7 ? 0.50 : num;

// Función para acumular puntos totales:
const getTotalPoints = (points : number) : number =>  userPoints+points;

// Función para actualizar puntos del jugador (userPoints):
const updateUserPoints = (newPoints : number) => newPoints >0 ? userPoints = newPoints : userPoints=0;

// Función para imprimir los puntos: 
const printPoints = ( ) => {
    if(pointsPrinted instanceof HTMLDivElement) {
        pointsPrinted.textContent = userPoints.toString( );
    }
};

// Función para enseñar carta:
const showCard = ( card: number) : void =>  {
    const imageCard = document.getElementById("imageCard");
    if(imageCard instanceof HTMLImageElement) {
        if(card <= 12 && card !== 0) {
            imageCard.src=`./src/assets/images/${card}.jpg`;
        } else imageCard.src=`./src/assets/images/back.jpg`;
    } 
}

// Función para conseguir mensaje según los puntos acumulados:
const getMessage = (totalPoints : number ) : string => {
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
const showMessage = (message : string ) : void => {
    if(messageUser instanceof HTMLHeadingElement) {
        messageUser.textContent = message;
    }
}

// Función para checkear los puntos y según los mismos, llamar a la función de generar mensaje o generar mensaje y enseñarlo si la puntuación acumulada es mayor de 7,50, ya que supondría que el jugador ha perdido. 
const checkPoints = ( ) => {
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
const resetPlayButton = ( ) => {
    if(playAgainButton instanceof HTMLButtonElement && giveCardButton instanceof HTMLButtonElement) {
        if(playAgainButton.disabled) {
                giveCardButton.textContent = "Play";
        } else giveCardButton.textContent = "Give me a card";
    }
}

// Función para jugar: genera la carta según número aleatorio, enseña la carta, acumula los puntos, imprime los puntos , resetea el botón de jugar para que pase a "Give me a card" y los chequea para saber qué hacer dependiendo de la cantidad: 
const play = ( ) => {
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

// AddEventListener para llamar a la función "PLAY" cuando se clicke en el botón:
if (giveCardButton !== null && giveCardButton !== undefined && giveCardButton instanceof HTMLButtonElement) {
    giveCardButton.addEventListener("click", play);
};

// AddEventListener para cuando se clicke en "PLANTARSE": chequea puntos, enseña el mensaje según los puntos acumulados, y deshabilita botones de "plantarse" y "dame carta" y habilita función de "¿Qué pasaría si...?" y "Jugar de nuevo":
if(standButton instanceof HTMLButtonElement) {
    standButton.addEventListener("click",( ) =>{
        checkPoints( );
        const message = getMessage(userPoints)
        showMessage(message);
        standButton.disabled = true;
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
        const message = getMessage(userPoints);
        showMessage(message);
        showCard(userPoints);
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
