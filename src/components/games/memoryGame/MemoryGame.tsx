import Card from './Card'
import './style.css' 
import useMemoryGame from '../../../hooks/useMemoryGame';
import IcoElementInfo from '@/components/IcoElementInfo/IcoElementInfo';
import IcoPlay from '@/components/ico/IcoPlay';
import Cronometro from '@/components/ico/Cronometro';
import Loading from '@/components/loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

import { Modal } from '@/components/Modal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonaje } from '@/redux/states';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';


const MemoryGame = () => {

    const {juegos}              = useSelector((state:AppStore) => state.juegosState);
    let navigate                = useNavigate();
    const dispatchState         = useDispatch()
   
    const [isOpen, setIsOpen]   = useState(false)

   
    const { timeInMinutes, timeInSeconds, characters, onClickCard, movements, finalized, load  } = useMemoryGame( juegos.find( juego => juego.nombre === 'Memory')!);

    const formatTime = (time : number) => {
        return time < 10 ? `0${time}` : time
    }

    useEffect(() => {

        if(finalized) setIsOpen(true);
        
    }, [finalized])

    const selectedCard = ( id: string ) => {
		
        setIsOpen(false);
        dispatchState(addPersonaje(id))
        navigate(`/juegos`);
	}
    

    if(characters.length === 0) return <Loading marginTop={50}/>

    if(load) return <Loading marginTop={50}/>
    

    return (
        <section className='flex flex-clm game'>

            <Modal isOpen={isOpen} characters={characters} selectedCard={selectedCard}/>

        

           <div className='flex info-game'>

           <IcoElementInfo 
                        title   = 'MOVIMIENTOS'
                        info    = {movements.toString()}
                        Ico     = {  <IcoPlay color='white' size={28}/> }
                    />
              

                <IcoElementInfo 
                        title   = 'TIEMPO JUGADO'
                        info    = {`${formatTime( timeInMinutes )} :  ${formatTime( timeInSeconds )}`}
                        Ico     = {  <Cronometro color='white' size={28}/> }
                    />
             
                   
                
               
           </div>

            <section className='cards-contains flex'>
                {
                    characters?.map( (character, i) => (
                        <Card 
                            key         = {character.id + i}
                            character   = {character}
                            onClickCard = {onClickCard}
                        />
                    ))
                }
            </section>

        </section>
    )
}

export default MemoryGame