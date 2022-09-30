import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useObtenerPersonajesFaltantesDia = (personajes: string[]) => {

    const [personajesFaltantes, setPersonajesFaltantes] = useState<string []>()
    const {personajesDiaActual, personajesPorDia} = useSelector((state:AppStore) => state.appState);

    const obtenerPersonajesFaltantesDia = (min:number,max:number) => {

       
        
        
        const personajesDelDia       : string[] = []
        const personajesFaltantesDia : string[] = []
        
        for(let i = min ; i < max + 1; i += 1 ){
        
          personajesDelDia.push(i.toString());
          
        }

        
        
        
        for( const personajeDia of personajesDelDia){
          
          
          const existe = personajes.includes(personajeDia)
          
          
          if(!existe )personajesFaltantesDia.push(personajeDia)
           
        }

       
        
        
        setPersonajesFaltantes( personajesFaltantesDia)
    }

    useEffect(() => {
        obtenerPersonajesFaltantesDia(personajesDiaActual,personajesDiaActual + personajesPorDia)
    }, [personajes])
    
   

    return [
        personajesFaltantes,
    ]
}
