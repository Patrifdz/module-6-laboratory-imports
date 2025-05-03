import "./style.css";

let userPoints : number= 0;
let card : number = 0;

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

const showMessageUser = (totalPoints : number) : void => {
    let message : string= "";
        switch (totalPoints) {
            case 4 : 
            message = "Has sido muy conservador";
            break;
            case 5: 
            message = "Te ha entrado el canguelo eh?";
            break;
            case 6:
            case 7: 
            message = "Casi casi...";
            break;
            case 7.5: 
            message = "¡Lo has clavado! ¡Enhorabuena!";
            break;
        }
        if(messageUser instanceof HTMLHeadingElement) {
            messageUser.textContent = message;
        }
        if(giveCardButton instanceof HTMLButtonElement) {
            enablingButton(giveCardButton);
        }
}

const checkPointsGame = ( ) => {
    if(userPoints > 7.5) {
        if(messageUser instanceof HTMLHeadingElement) {
            messageUser.textContent = "GAME OVER";    
        }
        if(giveCardButton instanceof HTMLButtonElement && standButton instanceof HTMLButtonElement) {
            enablingButton(giveCardButton);
            enablingButton(standButton);
        }
    }
}

const enablingButton = (button : HTMLButtonElement) : void => {
    if (button.disabled) {
        button.disabled = false;
    } else button.disabled = true;
}

const giveCard = ( ) => {
    getCard(randomNum());
    showCard(card);
    let pointsCard : number = getPointsCard(card);
    let totalPoints : number = getTotalPoints(pointsCard);
    printPoints( );
    checkPointsGame( );
    if(standButton instanceof HTMLButtonElement) {
        enablingButton(standButton);
    }
    if(playAgainButton instanceof HTMLButtonElement) {
        enablingButton(playAgainButton);
    }
}

if (giveCardButton !== null && giveCardButton !== undefined && giveCardButton instanceof HTMLButtonElement) {
    giveCardButton.addEventListener("click", giveCard);
};

if(standButton instanceof HTMLButtonElement) {
    standButton.addEventListener("click",( ) =>{
        showMessageUser(userPoints)
        if(whatIfButton instanceof HTMLButtonElement) {
            enablingButton(whatIfButton);
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
            enablingButton(whatIfButton);
        }
        if(standButton instanceof HTMLButtonElement) {
            enablingButton(standButton);
        }
    })
}

if(whatIfButton instanceof HTMLButtonElement) {
    whatIfButton.addEventListener("click", ( ) => {
        getCard(randomNum( ));
        showCard(card);
    });
}
