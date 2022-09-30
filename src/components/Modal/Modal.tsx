import { useObtenerPersonajesFaltantesDia } from '@/hooks/useObtenerPersonajesFaltantesDia';
import { AppStore } from '@/redux/store';
import { CharactersMemoryGame } from '@/services/characters.service';
import React, { DetailedHTMLProps, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Buttom from '../buttom/Buttom';
import './styles/Modal.css';

export interface ModalInterface {
	selectedCard : (id : string) => void;
	characters : CharactersMemoryGame[]
	isOpen     : boolean;
}

const Modal: React.FC<ModalInterface> = ({ isOpen, characters, selectedCard }) => {

	const personajes = useSelector((state: AppStore) => state.personajes)
	let navigate                = useNavigate();

	const [charactersSet, setCharactersSet] = useState([ ...new Set(characters.map((c) => c))])
	const [list] = useObtenerPersonajesFaltantesDia(personajes.personajes)

	useEffect(() => {


		let newSet = []
		
		for (const character of charactersSet) {

			const exist = personajes.personajes.indexOf(character.id)
			
			
			if (exist === -1) {
				newSet.push(character)
			}
			
		}

		setCharactersSet(newSet)

	}, [])
	

	if (!isOpen) return <></>;
	
	return (
		<dialog className={`modal ${isOpen ? 'flex' :''}`}  >
			
			<div className='flex caratas' style={{flexWrap : 'wrap'}}>	
				{		
					charactersSet.length > 0 
					?  charactersSet.map((character) => (
						
							<img  
								key		     = {character.id}
								className    = 'img-character'
								src          = {character.image}
								width        = {160}
								
								onClick	  	 = {() => selectedCard(character.id)}
							/>

					
						))
					: (
						<div className='flex flex-clm'>
							<h1>TE QUEDAN {list?.length} PERSONAJES EN ESTE DIA </h1>
							<h2>SIGUE JUGANDO</h2>
							<button 
								onClick	  	 = {() =>   navigate(`/juegos`)}>
								Ok 
							</button>
						</div>
					)
				}
			</div>
		</dialog>
	)
};

export default Modal;

