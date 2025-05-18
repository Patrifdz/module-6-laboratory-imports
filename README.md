# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clona el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

# Módulo 6 - Imports - Laboratorio

Puedes utilizar como punto de partida la sandbox de JS o la sandbox de TS (te recomendamos la de TS) y subir el resultado a tu repositorio de GitHub.

## Enunciado

¿Te acuerdas de la práctica de condicionales? En ella, implementamos el juego de cartas de las siete y media. ¿Qué te parece si hacemos una limpia 😀?

En esta práctica vamos a refactorizar el código para que sea más mantenible y reutilizable, siguiendo los mismos principios que aplicamos en este módulo.

---

## Apartados obligatorios

> Te recomendamos que arranques la aplicación con el sandbox de TypeScript.

### Modelo
- Extrae la parte que define el modelo de datos a un fichero `model.ts` y haz limpia en `main.ts`.
- Asegúrate que sigue todo funcionando y no salen errores por consola.

### Motor
- Extrae la parte que define las reglas a un fichero `motor.ts` y haz limpia en `main.ts`.
- Asegúrate que sigue todo funcionando y no salen errores por consola.

### UI
- Extrae la parte que define el UI a un fichero `ui.ts` y haz limpia en `main.ts`.
- Asegúrate que sigue todo funcionando y no salen errores por consola.

---

## Apartados opcionales

### Objeto partida
¿Te animas a crear un objeto `partida` y su método de ayuda para crear una partida?

- Asegúrate que sigue todo funcionando y no salen errores por consola.