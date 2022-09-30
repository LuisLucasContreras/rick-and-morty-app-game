import Cronometro from '@/components/ico/Cronometro'
import IcoCartas from '@/components/ico/IcoCartas'
import IcoElementInfo from '@/components/IcoElementInfo/IcoElementInfo'
import { formatTime } from '@/utils/formatoMinutoSegundo';
import React from 'react'
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';

const MainData = () => {

    const appState = useSelector((state:AppStore) => state.appState);
    const personajes = useSelector((state:AppStore) => state.personajes);
    const juegosState = useSelector((state:AppStore) => state.juegosState);

    const { tiempoJugado } = juegosState

    const { minutos, segundos} = tiempoJugado

    return (
        <div className='main-data flex'>

           

            <IcoElementInfo 
                title   = 'CARTAS TOTALES'
                info    = {`${personajes.personajes.length}/${appState.personajesTotales}`}
                Ico     = { <IcoCartas color='white' size={35}/> }
            />

            <IcoElementInfo 
                title   = 'TIEMPO TOTAL'
                info    = {`${formatTime(minutos)} : ${formatTime(segundos)} Min.`}
                Ico     = {  <Cronometro color='white' size={35}/> }
            />

           

        </div>
    )
}

export default MainData