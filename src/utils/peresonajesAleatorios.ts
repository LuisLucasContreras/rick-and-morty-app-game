import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export const usePersonajesAleatorios = (  numeroPersonajes : number ) => {


    const appState = useSelector((store : AppStore) => store.appState)

    const { personajesDiaActual, personajesPorDia } = appState

    const [listPersonajesAleatorios, setListPersonajesAleatorios] = useState<number[]>()

    useEffect(() => {

    
        const cantidadMaxima = personajesDiaActual + personajesPorDia

        let personajes : number[] = [];
    
        for (let i = 0;  personajes.length < numeroPersonajes; i++) {
    
            llenarAleatorios(personajes, personajesDiaActual, cantidadMaxima + 1)
    
        }

        setListPersonajesAleatorios(personajes)

    }, [personajesDiaActual])
    

   

    return [listPersonajesAleatorios]

}

function llenarAleatorios(arr : number[], cantidadMin : number,cantidadMax : number){

    // const nuevoArreglo = []
  
    var valorAleatorio = Math.floor(Math.random() * (cantidadMax - cantidadMin ) + cantidadMin) 
  
    if(!arr.some(numero => numero == valorAleatorio)) arr.push(valorAleatorio);
    
    
}