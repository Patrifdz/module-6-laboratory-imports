# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Módulo 5 – Condicionales – Laboratorio

Puedes utilizar como punto de partida la sandbox de JS o la sandbox de TS (recomendamos TS) y subir el resultado a tu repositorio de GitHub.

## 🎴 Juego de las siete y media

Vamos a implementar el juego de cartas de las **7 y media** en modo solitario.

### Reglas del juego

El juego de las siete y media es un juego de cartas español que tradicionalmente se juega con varios jugadores, pero también se puede adaptar para un solo jugador. Para jugar en solitario, sigue estos pasos:

1. Baraja una baraja española de 40 cartas y colócalas boca abajo sobre la mesa.
2. Gira la primera carta y colócala boca arriba; será la carta inicial del jugador.
3. Decide si **tomar otra carta** o **plantarte**. El objetivo es sumar 7,5 puntos o acercarte lo máximo posible sin pasarte.
4. Si tomas otra carta:
   - Gira la siguiente carta boca arriba.
   - Añade su valor a tu mano.
   - Puedes seguir pidiendo cartas hasta que la suma supere 7,5 (pierdes) o decidas plantarte.
5. Si te plantas, tu turno termina. Anota tu puntuación y finaliza la partida.
6. Continúa hasta agotar la baraja o detenerte.
7. Si logras exactamente 7,5 puntos, **¡ganas!**; si no, tu objetivo es la puntuación más cercana a 7,5.

**Valores de las cartas:**
- **As**: 1 punto  
- **2–7**: valor nominal (2–7 puntos)  
- **Sota (10), Caballo (11) y Rey (12)**: 0,5 puntos cada una  

---

## 📋 Apartados obligatorios

Arranca la aplicación con la sandbox de **TypeScript**.

1. ### Mostrar puntuación  
   - Crea una variable para almacenar la puntuación, inicializada en `0`.  
   - Añade en el HTML:
     ```html
     <div id="points">0</div>
     ```
   - Implementa en TS:
     ```ts
     function muestraPuntuacion(): void {
       const el = document.getElementById('points')!;
       el.textContent = puntuacion.toString();
     }

     document.addEventListener('DOMContentLoaded', muestraPuntuacion);
     ```
   - Más adelante, vuelve a llamarla cada vez que el usuario pida una nueva carta.

2. ### Pedir carta  
   - Genera una función `dameCarta(): number` que devuelva un valor aleatorio de `{1,2,3,4,5,6,7,10,11,12}`.  
     - **Pista:** genera un número de 1 a 10; si es mayor que 7, súmale 2.  
   - En el HTML:
     ```html
     <button id="giveCard">Pide Carta</button>
     ```
   - Al hacer click, llama a `dameCarta()` y muestra el resultado en consola para probar.

3. ### Mostrar carta  
   - Inserta en el HTML:
     ```html
     <img
       id="imageCard"
       src="https://github.com/Lemoncode/fotos-ejemplos/raw/main/cartas/back.jpg"
       alt="Carta boca abajo"
     />
     ```
   - Implementa:
     ```ts
     const mostrarCarta = (carta: number): void => {
       // Mapear valor de carta → URL de imagen (switch o lookup)
       // Actualizar imageCard.src
     }
     ```
   - Al pulsar “Pide Carta”, llama a `dameCarta()`, luego a `mostrarCarta(carta)`.

4. ### Sumar puntuación  
   - Tras repartir la carta, suma su valor a la variable `puntuacion`.  
   - Vuelve a llamar a `muestraPuntuacion()` para actualizar la pantalla.

5. ### Game Over  
   ```ts
   if (puntuacion > 7.5) {
     document.getElementById('message')!.textContent = 'Game Over';
     document.getElementById('giveCard')!.setAttribute('disabled', 'true');
   }
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

## 🎁 Apartado opcional: “¿Qué habría pasado?”

- Añade un botón **"¿Y si…?"** que, al pulsarlo, simule repartir cartas hasta el final y muestre la puntuación hipotética que habría obtenido el usuario.  
