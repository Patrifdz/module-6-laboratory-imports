// Interface creada para el objeto typeMessage
interface TypeMessage {
    messageFor4: string;
    messageFor5: string;
    messageFor6and7: string;
    messageFor7andHalf: string;
    messageForMore7andHalf: string;
  }
  interface GameData {
    userPoints: number,
  }

export const gameData : GameData = {
  userPoints: 0,
}

export const updateUserPoints = (newPoints : number) => gameData.userPoints = newPoints;

export const typeMessage : TypeMessage = {
    messageFor4 : "Has sido muy conservador",
    messageFor5 : "Te ha entrado el canguelo eh?",
    messageFor6and7 : "Casi casi...",
    messageFor7andHalf : "¡Lo has clavado! ¡Enhorabuena!",
    messageForMore7andHalf : "GAME OVER",
}

