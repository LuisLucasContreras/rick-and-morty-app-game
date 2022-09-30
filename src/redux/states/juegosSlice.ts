import { juegos } from '@/data/juegos';
import { getLocalStorage } from '@/utils/localstorage.utility';
import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../../utils/localstorage.utility';


export interface JuegosState {
    juegos: Juego[];
    tiempoJugado  : TiempoJugado;
} 

export interface TiempoJugado  {
    minutos:   number;
    segundos:  number;
}

export interface Juego {
    id            : number;
    nombre        : string;
    descripcion   : string;
    tiempoJugado  : TiempoJugado;
    vecesJugado   : number;
}
  
const initialState: JuegosState = {
    juegos: juegos,
    tiempoJugado: {
        minutos: 0,
        segundos: 0
    }
}


export const juegosSlice = createSlice({
    name         : 'juegos',
    initialState :  getLocalStorage('juegosState',initialState),
    reducers     : {
        setJuegos: (state, action) => {
            return  action.payload;
        },
        
        setJuego : (state, action) => {

            const nuevoState = {
                ...state,
                tiempoJugado: nuevoTiempoJugado(state, action),         
                juegos      : state.juegos.map((juego : Juego) => juego.id === action.payload.id 
                    ?   {
                            ...action.payload,
                            vecesJugado : juego.vecesJugado + 1,
                            tiempoJugado: nuevoTiempoJugado(juego, action)  
                        } 
                    : 
                        juego
                )
            }

            setLocalStorage('juegosState', nuevoState)
          
            return nuevoState
        }
    }
})


const nuevoTiempoJugado = (state : JuegosState | Juego, action : any) : TiempoJugado => {

    const { tiempoJugado } = state

    const { minutos, segundos } = tiempoJugado

    const { minutos: minutosPayload, segundos: segundosPayload } = action.payload.tiempoJugado

    return  {

        minutos: segundos + segundosPayload >= 60 
            ? minutos + minutosPayload + 1
            : minutos + minutosPayload,

        segundos:segundos + segundosPayload >= 60 
            ? segundos + segundosPayload - 60 
            : segundos + segundosPayload

    }    
}

export const { setJuegos, setJuego } = juegosSlice.actions;

export default juegosSlice.reducer;