
import { configureStore } from '@reduxjs/toolkit';
import {  personajesSlice,appStateSlice } from './states';
import { AppState } from './states/appState';
import { Personajes } from './states/personajes';
import { juegosSlice, JuegosState } from './states/juegosSlice';

export interface AppStore {
    personajes: Personajes;
    appState: AppState;
	juegosState : JuegosState;
}

export default configureStore<AppStore>({
	reducer: {
		personajes: personajesSlice.reducer,
		appState: appStateSlice.reducer,
		juegosState : juegosSlice.reducer
	}
});
