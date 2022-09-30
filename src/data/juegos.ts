import { Juego } from "@/redux/states/juegosSlice";

export const juegos : Juego[] = [ 
    {
        id: 1,
        nombre: "Memory",
        descripcion: "Se debe de dar vuelta dos cartas, si estas son iguales se quedan boca arriba, si no coinciden se vuelven a dar vuelta",
        tiempoJugado: {
            minutos: 0,
            segundos: 0
        },
        vecesJugado: 0
    },
    // {
    //     id: 2,
    //     nombre: "Memory",
    //     descripcion: "The Legend of Zelda: Breath of the Wild es un videojuego de acción-aventura desarrollado y publicado por Nintendo para Nintendo Switch y Wii U. Fue lanzado mundialmente el 3 de marzo de 2017. Es el decimotercer título principal de la serie The Legend of Zelda y el sexto juego de la franquicia principal de la serie. El juego se desarrolla en un mundo abierto, con el jugador controlando a Link, quien puede explorar el mundo a su antojo y resolver una variedad de misiones. El juego se centra en la exploración, la resolución de puzles y la supervivencia, y el jugador puede interactuar con el entorno para crear herramientas y armas. El juego también presenta un sistema de combate basado en la esgrima, en el que el jugador puede atacar a los enemigos con armas y armaduras. El juego se desarrolló utilizando el motor gráfico de la serie, el Unreal Engine 4, y se lanzó en el Nintendo Switch con una versión mejorada del motor gráfico, el CRYENGINE. El juego recibió críticas positivas de los críticos, que elogiaron su mundo abierto, su jugabilidad y su historia, aunque criticaron su duración y su falta de contenido adicional. El juego recibió varios premios y fue nombrado Juego del año por varios medios de comunicación. El juego ha vendido más de 17 millones de copias en todo el mundo, convirtiéndolo en el juego más vendido de la serie The Legend of Zelda y el juego más vendido de Nintendo Switch.",
    //     tiempoJugado: {
    //         minutos: 0,
    //         segundos: 0
    //     },
    //     vecesJugado: 0
    // },
]   