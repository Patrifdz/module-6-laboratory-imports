import "./style.css";

let userPoints : number= 0;
const messageUser= document.getElementById("message") as HTMLHeadingElement;

const printPoints = (points : number ) => {
    const pointsPrinted = document.getElementById("points");
    if(pointsPrinted instanceof HTMLDivElement) {
        pointsPrinted.textContent = points.toString();
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
    } 
    return newCard;
}

const showMessageUser = (totalPoints : number) : void => {
    let message;
    if(messageUser instanceof HTMLHeadingElement) {
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
    }
}
const giveCard = ( ) => {
    const cardValue = randomCard();
    printPoints(userPoints);
    showCard(cardValue);
    showMessageUser(userPoints);
}
const buttonGiveCard = document.getElementById("giveCard");
if(buttonGiveCard instanceof HTMLButtonElement) {
    buttonGiveCard.addEventListener("click", giveCard);
}

const showCard = ( card: number) : void =>  {
    const imageCard = document.getElementById("imageCard");
    if(imageCard instanceof HTMLImageElement) {
        if(card <= 12) {
            imageCard.src=`./src/assets/images/${card}.jpg`;
        } else imageCard.src=`./src/assets/images/back.jpg`;
    } 
}

