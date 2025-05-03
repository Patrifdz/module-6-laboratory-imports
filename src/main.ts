import "./style.css";
interface MessageOnStanding  {

}

let userPoints : number= 0;
let card : number = 0;
let message = "";
const messageOnStanding = {
    messageFor4 : "Has sido muy conservador",
    messageFor5 : "Te ha entrado el canguelo eh?",
    messageFor6and7 : "Casi casi...",
    messageFor7andHalf : "¡Lo has clavado! ¡Enhorabuena!",
}

const giveCardButton = document.getElementById("giveCard");
const messageUser = document.getElementById("message");
const standButton = document.getElementById("stand");
const playAgainButton = document.getElementById("playAgain");
const whatIfButton = document.getElementById("whatIf");


const randomNum = ( ) => Math.floor(Math.random() *10) +1;

const getCard = (num : number ) : number =>  num>7 ?  card = num + 2 : card = num;

const getPointsCard = (num : number ) : number => num>7 ? 0.50 : num;

const getTotalPoints = (points : number) : number =>  userPoints+= points;

const printPoints = ( ) => {
    const pointsPrinted = document.getElementById("points");
    if(pointsPrinted !== null && pointsPrinted !== undefined && pointsPrinted instanceof HTMLDivElement) {
        pointsPrinted.textContent = userPoints.toString( );
    }
};
const showCard = ( card: number) : void =>  {
    const imageCard = document.getElementById("imageCard");
    if(imageCard instanceof HTMLImageElement) {
        if(card <= 12) {
            imageCard.src=`./src/assets/images/${card}.jpg`;
        } else imageCard.src=`./src/assets/images/back.jpg`;
    } 
}

const getMessageOnStanding = (totalPoints : number ) : void => {
    switch (totalPoints) {
        case 4 : 
        message = messageOnStanding.messageFor4;
        break;
        case 5: 
        message = messageOnStanding.messageFor5;
        break;
        case 6:
        case 7: 
        message = messageOnStanding.messageFor6and7;
        break;
        case 7.5: 
        message = messageOnStanding.messageFor7andHalf;
        break;
    }
}

const showMessage = (message : string ) : void => {
    if(messageUser instanceof HTMLHeadingElement) {
        messageUser.textContent = message;
    }
}

const checkPointsOnPlaying = ( ) => {
    if(userPoints > 7.5) {
        message = "GAME OVER";
        showMessage(message);
        if(giveCardButton instanceof HTMLButtonElement) {
            giveCardButton.disabled = true;
        }
        if(standButton instanceof HTMLButtonElement) {
            standButton.disabled = true;
        }
    }
}

const checkPointsOnStanding = ( ) => {
    getMessageOnStanding(userPoints);
    if(messageUser instanceof HTMLHeadingElement) {
        messageUser.textContent = message;
    }
}

const giveCard = ( ) => {
    getCard(randomNum());
    showCard(card);
    let pointsCard : number = getPointsCard(card);
    let totalPoints : number = getTotalPoints(pointsCard);
    printPoints( );
    if(standButton instanceof HTMLButtonElement) {
        standButton.disabled = false;
    }
    if(playAgainButton instanceof HTMLButtonElement) {
        playAgainButton.disabled = false;
    }
    checkPointsOnPlaying( );
}

if (giveCardButton !== null && giveCardButton !== undefined && giveCardButton instanceof HTMLButtonElement) {
    giveCardButton.addEventListener("click", giveCard);
};

if(standButton instanceof HTMLButtonElement) {
    standButton.addEventListener("click",( ) =>{
        checkPointsOnStanding( );
        if(whatIfButton instanceof HTMLButtonElement) {
            whatIfButton.disabled = false;
        }
        if(giveCardButton instanceof HTMLButtonElement) {
            giveCardButton.disabled = true;
        }
    });
}

if(playAgainButton instanceof HTMLButtonElement) {
    playAgainButton.addEventListener("click", ( ) => {
        userPoints = 0;
        printPoints( );
        if(messageUser instanceof HTMLHeadingElement) {
            messageUser.textContent = "";
        }
        // if(giveCardButton instanceof HTMLButtonElement) {
        //     enablingButton(giveCardButton);
        // }
        if(whatIfButton instanceof HTMLButtonElement) {
            whatIfButton.disabled = true;
        }
        if(standButton instanceof HTMLButtonElement) {
            standButton.disabled = false;
        }
    })
}

if(whatIfButton instanceof HTMLButtonElement) {
    whatIfButton.addEventListener("click", ( ) => {
        getCard(randomNum( ));
        showCard(card);
    });
}
