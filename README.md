# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clona el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Módulo 5 – Condicionales – Laboratorio

Puedes utilizar como punto de partida la sandbox de JS o la sandbox de TS (recomendamos TS) y subir el resultado a tu repositorio de GitHub.

##  Juego de las siete y media

Vamos a implementar el juego de cartas de las **7 1/2** en modo solitario.

Por si no conocéis las reglas del juego, os las explicamos brevemente:

El juego de las siete y media es un juego de cartas español que tradicionalmente se juega con varios jugadores, pero también se puede adaptar para un solo jugador. 

Para jugar en solitario, sigue estos pasos:

1. Baraja una baraja española de 40 cartas y colócalas boca abajo sobre la mesa.
2. Gira la primera carta y colócala boca arriba; será la carta inicial del jugador.
3. Decide si **tomar otra carta** o **plantarte**. El objetivo es sumar 7,5 puntos o acercarte lo máximo posible sin pasarte.
4. Si decides tomar otra carta, gira la siguiente carta boca arriba. Añade el valor de esta carta a tu mano y decide si deseas tomar otra carta o quedarte con lo que tienes. Puedes tomar tantas cartas como desees, pero si la suma de los valores de las cartas de tu mano supera los 7,5 puntos, pierdes automáticamente la partida.
5. Si decides quedarte con la carta que tienes, tu turno termina. Anota tu puntuación y pasa al siguiente turno.
6. Continúa hasta agotar la baraja o detenerte.
7. Si logras exactamente 7,5 puntos, **¡ganas!**; si no, tu objetivo es la puntuación más cercana a 7,5.

**Valores de las cartas:**
- **As**: 1 punto  
- **2–7**: valor nominal (2–7 puntos)  
- **Sota (10), Caballo (11) y Rey (12)**: 0,5 puntos cada una  
---

##  Apartados obligatorios

Arranca la aplicación con la sandbox de **TypeScript**.

### 1. Mostrar puntuación  
Arranca por crear una variable que almacena la puntuación que lleve el usuario:

- Crea una variable para almacenar la puntuación, inicialmente será 0.
- Crea un div en el HTML en el que podamos mostrar la puntuación.
- Crea una función que se llame muestraPuntuacion que muestre la puntuación actual en el div.
- Invoca a la función en cuanto este disponible el DOM.

Más adelante invocaremos muestraPuntuación cada vez que el usuario pida carta nueva.

### 2. Pedir carta  
Implementa la funcionalidad de pedir carta, ¿En qué consiste?

- Hay que generar una función que nos devuelva una carta aleatoria, la podemos llamar dameCarta.
- Para ello exponemos un botón en el HTML que al pulsarlo llame a la función dameCarta.
- Para probar este caso, de momento muestra la carta elegida por consola.
### Pistas:
- Las cartas tienen los siguientes valores: 1,2,3,4,5,6,7,10,11,12
- Hasta ahora math.Random lo hemos usado para obtener números aleatores de un rango continuo (por ejemplo de 0 a 100), en este caso nos queremos saltar el 8 y el 9, SPOILER ALERT (piensa en una solución antes de leer la siguiente pista :))... ¿Cómo podemos hacerlo?
- Puedes plantear generar un número aleatorio entre 1 y 10, si el número es mayor que 7, le sumas 2 y ya tienes los valores que necesitabas.

 ### 3. Mostrar carta  
   - Crea una función que se llame muestraCarta que muestre la carta que le pasemos por parámetro, la firma podría ser tal que así:

     ```ts
     const mostrarCarta = (carta: number): void;
     ```
   ### Pistas
   - Añade un img en el HTML en el que podamos mostrar la carta.
- Ese *img* va a tener un *src* que va a ser la url de la imagen de la carta, de momento, utiliza la imagen de carta boca abajo: https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg
- Crea una función mostrar carta, para mapear valor a imagen de carta puedes utilizar un switch para hacer la conversión, recuerda que más arriba tienes los enlaces a las imágenes de las cartas.
- Cuando el usuario pulse en el bóton *Pide Carta* llama a pideCarta y con el resultado llama a mostrarCarta.

### 3. Sumar puntuación  
Una vez que le hemos dado la carta al usuario, tenemos que sumar la puntuación de la carta a la puntuación total.

### Pistas
- Tenemos un div donde mostramos la puntuación y tenemos una variable donde la almacenamos.
- Suma el nuevo valor y llama a la función que creamos previamente para mostrar la información.

### 4. Game Over  
- Si el usuario se pasa de 7,5 puntos, el juego termina y se muestra un mensaje de Game Over, además el usuario no puede seguir pidiendo cartas.

### 5. Me planto

- Añade un botón para que el usuario pueda plantarse.
- Al plantarse:
  - El juego termina y el usuario no puede pedir más cartas.
  - Si la puntuación es menor que 4: muestra **"Has sido muy conservador."**
  - Si la puntuación es 5: muestra **"Te ha entrado el canguelo, ¿eh?"**
  - Si la puntuación es 6 o 7: muestra **"Casi casi..."**
  - Si la puntuación es 7.5: muestra **"¡Lo has clavado! ¡Enhorabuena!"**

### 6. Nueva partida

- Una vez que la partida ha terminado (por plantarse o perder), muestra un botón **"Jugar de nuevo"** para reiniciar el juego.

### 7. Estila la aplicación

- Utiliza CSS para ajustar márgenes, espacios, colores, tipografía y transiciones.
- Asegúrate de que la interfaz sea atractiva y coherente.

---

## Apartado opcional: “¿Qué habría pasado?”

- Añade un botón **"¿Y si…?"** que, al pulsarlo, simule repartir cartas hasta el final y muestre la puntuación hipotética que habría obtenido el usuario.  
