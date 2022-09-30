import { getLocalStorage, setLocalStorage } from "@/utils/localstorage.utility"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface AppState {
    personajesTotales   : number
    personajesPorDia    : number
    diasTotalesMes      : number
    mesActual           : number
    diaActual           : number
    personajesDiaActual : number
   
}

const initialState : AppState = {
    personajesTotales   : 0,
    personajesPorDia    : 0,
    personajesDiaActual : 0,
    diasTotalesMes      : 0,
    mesActual           : 0,
    diaActual           : 0
}



export const appStateSlice = createSlice({

    name            : 'appState',
    initialState    :  getLocalStorage('appState',initialState),
    reducers        : {

        setAppState : (state, action: PayloadAction<AppState>) => {
           
            setLocalStorage('appState',action.payload)
            return action.payload
        },

        setPersonajesDiaActual : (state, action: PayloadAction<AppState>) => {
            return{
                ...state, 
                diaActual             : action.payload.diaActual,
                personajesDiaActual   : action.payload.personajesDiaActual
            }
        }

    }
})


export const { setAppState, setPersonajesDiaActual } = appStateSlice.actions;

export default appStateSlice.reducer;