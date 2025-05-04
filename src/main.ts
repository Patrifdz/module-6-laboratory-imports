import "./style.css";
interface MessageOnStanding {
    messageFor4: string;
    messageFor5: string;
    messageFor6and7: string;
    messageFor7andHalf: string;
    messageForMore7andHalf: string;
  }
// Variables que se van a usar:
let userPoints : number= 0;
let card : number = 0;
let message = "";
const typeMessage : MessageOnStanding = {
    messageFor4 : "Has sido muy conservador",
    messageFor5 : "Te ha entrado el canguelo eh?",
    messageFor6and7 : "Casi casi...",
    messageFor7andHalf : "¡Lo has clavado! ¡Enhorabuena!",
    messageForMore7andHalf : "GAME OVER",
}

// Variables que enlazan con el id de cada elemento en el HTML:
const pointsPrinted = document.getElementById("points");
const giveCardButton = document.getElementById("giveCard");
const messageUser = document.getElementById("message");
const standButton = document.getElementById("stand");
const playAgainButton = document.getElementById("playAgain");
const whatIfButton = document.getElementById("whatIf");

// Función que genera el número aleatorio entre el 1 y el 9:
const randomNum = ( ) => Math.floor(Math.random() *10) +1;

// Función que genera la carta dependiendo del número aleatorio. Cartas de la 1 a la 7 y, si es mayor que 7, sumará 2 para crear el 10, 11 y 12:
const getCard = (num : number ) : number =>  num>7 ?  card = num + 2 : card = num;

// Función para conseguir el número de la carta. De la 1-7, mismo valor, mayor que 7, 0.50 puntos:
const getPointsCard = (num : number ) : number => num>7 ? 0.50 : num;

// Función para acumular puntos totales:
const getTotalPoints = (points : number) : number =>  userPoints+= points;

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
const getMessage = (totalPoints : number ) : void => {
    if (totalPoints > 7.5) {
        message = typeMessage.messageForMore7andHalf;
    } else {
        switch (totalPoints) {
            case 4 : 
            message = typeMessage.messageFor4;
            break;
            case 5: 
            message = typeMessage.messageFor5;
            break;
            case 6:
            case 7: 
            message = typeMessage.messageFor6and7;
            break;
            case 7.5: 
            message = typeMessage.messageFor7andHalf;
            break;
            default:
            message = "";
        }
    } 
}

// Función para enseñar el mensaje: 
const showMessage = ( ) : void => {
    if(messageUser instanceof HTMLHeadingElement) {
        messageUser.textContent = message;
    }
}

// Función para checkear los puntos y según los mismos, llamar a la función de generar mensaje o generar mensaje y enseñarlo si la puntuación acumulada es mayor de 7,50, ya que supondría que el jugador ha perdido. 
const checkPoints = ( ) => {
    getMessage(userPoints); 
           if (userPoints > 7.5) {
                if(giveCardButton instanceof HTMLButtonElement && standButton instanceof HTMLButtonElement && playAgainButton instanceof HTMLButtonElement) {
                    getMessage(userPoints);
                    showMessage( );
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

// Función para resetear a valores iniciales:
const resetInitialValues = ( ) => {
    userPoints = 0;
        card = 0;
        message = "";
}

// Función para jugar: genera la carta según número aleatorio, enseña la carta, acumula los puntos, imprime los puntos , resetea el botón de jugar para que pase a "Give me a card" y los chequea para saber qué hacer dependiendo de la cantidad: 
const play = ( ) => {
    getCard(randomNum());
    showCard(card);
    let pointsCard : number = getPointsCard(card);
    getTotalPoints(pointsCard);
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
        showMessage( );
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
        resetInitialValues( );
        printPoints( );
        showMessage( );
        showCard(card);
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
        getCard(randomNum( ));
        showCard(card);
    });
}
