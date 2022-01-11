# SofkaChallenge
Juego de Trivia creado para el reto de Sofka, en el que se deben contestar una serie de preguntas e ir acumulando puntos. Este proyecto fue realizado usando NodeJS con Express del lado del Backend para la creación de la Api y con Angular 12 del lado del FrontEnd. Se utilizo MongoDB Atlas para la persistencia de datos.

## Content 🚀
Se cuenta con 3 opciones en el menú principal: una para Jugar, una para visualizar el ranking y otra para la configuración del juego.

* Cuando se entra a la opción de Jugar se pide el nombre del jugador
* Si el jugador ya existe el puntaje que tiene sera actualizado por el puntaje que obtenga en la partida
* Si el jugador no existe sera creado en la base de datos y añadido junto con el puntaje que obtenga.
* El juego consta de 25 preguntas, 5 preguntas por cada ronda y a medida que avancen las rondas subira la dificultad de la pregunta.
* Las categorias que definen la dificultad son: Facil, Medio, Dificil, Maestro, Legendario
* Distribución de puntos por rona: | Facil => 10ptos | | Medio => 15ptos | | Dificil => 20ptos | | Experto => 25ptos | | Legendario => 30ptos | 
* Si se falla una pregunta se reinician los puntos a 0, si se sale antes de la partida se mantienen los puntos acumulados
* El ranking muestra los 5 primeros jugadores con el mayor puntaje
* La Configuración permite añadir una pregunta, sus respuestas y seleccionar el nivel de dificultad

### Pre-requisitos 📋

* [Instalar NodeJs](https://nodejs.org/es/)
* [Instalar Angular](https://angular.io/guide/setup-local)

## Instalación 🔧

_La carpeta server contiene el Backend y la carpeta Triviapp el Frontend._

_Nota: El backend corre en el puerto 4000_

Clonar el proyecto

```
git clone https://github.com/lsepu/SofkaChallenge.git
```

Abrir la carpeta server e instalar dependencias, lo mismo para la carpeta TriviApp 

```
npm install
```

Dentro de server, ejecutar el comando para correr el servidor 
```
npm run dev
```

Dentro de Triviapp, ejecutar el comando para correr front. 
```
ng serve -o
```


