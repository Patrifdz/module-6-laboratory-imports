// Interface creada para el objeto typeMessage
interface TypeMessage {
    messageFor4: string;
    messageFor5: string;
    messageFor6and7: string;
    messageFor7andHalf: string;
    messageForMore7andHalf: string;
  }

// He quitado la asignación inicial del valor "0" de la variable, ya que puedo incializarla a "0" llamando a la función updateUserPoints(0) al comienzo del fichero "main.ts",  y de este modo separo la definición del dato de su inicialización.
export let userPoints : number;

// Función para actualizar puntos del jugador (userPoints). Tengo que traer esta función al fichero "model.ts" ya que necesito que el import acceda a la variable a través de una función "setter" puesto que los imports no pueden acceder a valores inmutables, como sería si accede directamente a la variable "userPoints":
export const updateUserPoints = (newPoints : number) => newPoints >0 ? userPoints = newPoints : userPoints=0;

export const typeMessage : TypeMessage = {
    messageFor4 : "Has sido muy conservador",
    messageFor5 : "Te ha entrado el canguelo eh?",
    messageFor6and7 : "Casi casi...",
    messageFor7andHalf : "¡Lo has clavado! ¡Enhorabuena!",
    messageForMore7andHalf : "GAME OVER",
}

