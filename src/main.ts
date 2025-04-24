import "./style.css";

let userPoints : number= 0;
const pointsPrinted = document.getElementById("points") as HTMLDivElement;
const giveCardButton = document.getElementById("giveCard") as HTMLButtonElement;
const messageUser = document.getElementById("message") as HTMLHeadingElement;
const plantarmeButton = document.getElementById("plantarme") as HTMLButtonElement;
const playAgainButton = document.getElementById("playAgain") as HTMLButtonElement;

const printPoints = ( ) => {
        pointsPrinted.textContent = userPoints.toString( );
};

const showCard = ( card: number) : void =>  {
    const imageCard = document.getElementById("imageCard");
    if(imageCard instanceof HTMLImageElement) {
        if(card <= 12) {
            imageCard.src=`./src/assets/images/${card}.jpg`;
        } else imageCard.src=`./src/assets/images/back.jpg`;
    } 
}

const randomCard = ( ) : number => {
    let newCard= Math.floor(Math.random() *10) +1;
    if(newCard>7) {
        newCard += 2;
        userPoints += 0.50;
    } else {
        userPoints += newCard;
    }   
    if(userPoints > 7.5) {
        messageUser.textContent = "GAME OVER";    
        giveCardButton.disabled = true;
    } 
    return newCard;
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
        messageUser.textContent = message;
        giveCardButton.disabled = true;
}
const giveCard = ( ) => {
    const cardValue = randomCard();
    printPoints( );
    showCard(cardValue);
}

giveCardButton.addEventListener("click", giveCard);
plantarmeButton.addEventListener("click",( ) =>showMessageUser(userPoints));
playAgainButton.addEventListener("click", ( ) => {
    userPoints = 0;
    printPoints( );
    messageUser.textContent = "";
    giveCardButton.disabled = false;
})

    



