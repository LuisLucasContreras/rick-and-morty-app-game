import React from 'react'
import CardGame from './CardGame'
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import Loading from '@/components/loading/Loading';

const CardsGames = () => {

	const {juegos} = useSelector((state:AppStore) => state.juegosState);


	if(juegos.length === 0) return <Loading />
	

	return (
		<div className='contain-cards'>

			{
				juegos?.map((juego) => (
					<CardGame  
						key   = {juego.id}
						juego = {juego}
					/>
				))
			}
			
		</div> 
	)
}

export default CardsGames