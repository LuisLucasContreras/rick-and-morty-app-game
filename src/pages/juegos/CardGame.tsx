import Buttom from '@/components/buttom/Buttom'
import Cronometro from '@/components/ico/Cronometro'
import IcoDesc from '@/components/ico/IcoDesc'
import IcoPlay from '@/components/ico/IcoPlay'
import IcoElementInfo from '@/components/IcoElementInfo/IcoElementInfo'
import { formatTime } from '@/utils/formatoMinutoSegundo'
import { Juego } from '../../redux/states/juegosSlice';


interface Props {
    juego: Juego 
}

const CardGame = ( { juego } : Props ) => {

    const { descripcion, id, nombre, tiempoJugado, vecesJugado } = juego;

    const { minutos, segundos} = tiempoJugado

    return (
        <article className='card-game box'>
            <h2>{nombre}</h2>
            
            <div className='flex card-body'>
                
                <div className='flex flex-clm clm-1' >
                    <IcoElementInfo 
                        title   = 'TIEMPO JUGADO'
                        info    = {`${formatTime(minutos)} : ${formatTime(segundos)} Min.`}
                        Ico     = {  <Cronometro color='white' size={28}/> }
                    />

                    <IcoElementInfo 
                        title   = 'VECES JUGADO'
                        info    = {`${vecesJugado}`}
                        Ico     = {  <IcoPlay color='white' size={28}/> }
                    />
                </div>

                <div className=' clm-2'>
                    <IcoElementInfo 
                        title   = 'DESCRIPCIÓN'
                        info    = {descripcion}
                        Ico     = {  <IcoDesc color='white' size={28}/> }
                    />
                </div>


            </div>

            <Buttom link={`${nombre.toLowerCase()}`} marginTop={40}/>
            
        </article>
    )
}

export default CardGame