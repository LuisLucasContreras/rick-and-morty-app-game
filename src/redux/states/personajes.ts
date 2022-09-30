import { getLocalStorage } from "@/utils/localstorage.utility";
import {  createSlice } from "@reduxjs/toolkit";
import {  PersonajeId } from '../../models/personaje';

const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}


export interface Personajes {
    personajes: string[] ;
}

const initialState = {
    personajes : [] as string[]
}


export const personajesSlice = createSlice({
    name            : 'personajes',
    initialState    : getLocalStorage('personajesState', initialState),
    reducers        : {

        setPersonajes : (state, action) => {
            return action.payload;
        },
        
        addPersonaje : (state, action) => {

            const nuevoState = {
                ...state,
                personajes: [...state.personajes, action.payload]
            }

            setLocalStorage('personajesState', nuevoState)

            return nuevoState
                
            
        }


    }
});


export const { setPersonajes, addPersonaje } = personajesSlice.actions;

export default personajesSlice.reducer;