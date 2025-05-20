import { gameData, updateUserPoints, typeMessage } from './model';
// import { giveCardButton, standButton, playAgainButton, printPoints, showMessage, showCard } from './ui';

updateUserPoints(0);

// Función que genera el número aleatorio entre el 1 y el 9:
export const randomNum = ( ) => Math.floor(Math.random() *10) +1;

// Función que genera la carta dependiendo del número aleatorio. Cartas de la 1 a la 7 y, si es mayor que 7, sumará 2 para crear el 10, 11 y 12:
export const getCard = (num : number ) : number =>  num>7 ? num + 2 : num;

// Función para conseguir el número de la carta. De la 1-7, mismo valor, mayor que 7, 0.50 puntos:
export const getPointsCard = (num : number ) : number => num>7 ? 0.50 : num;

// Función para acumular puntos totales:
export const getTotalPoints = (points : number) : number =>  gameData.userPoints+points;


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
