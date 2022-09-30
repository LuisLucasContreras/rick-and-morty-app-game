import { CharactersMemoryGame, CharactersOnlyImg } from '@/services/characters.service'
import React from 'react'
import backImg from '../../../assets/backdos.jpg'
import './style.css' 


interface Props {
	character : CharactersMemoryGame
	onClickCard : (e:any, idcharacter : string) => void
}

const Card = ({onClickCard,  character}: Props) => {



    return (
       

           <div className='card flex'>

				<div className='cara card-back' onClick={(e:any) => onClickCard(e , character.id)}>

					<img  className='img-character' src={backImg } alt="" />

				</div>

				<div className='cara card-front'>
					<img  className='img-character' src={character.image} alt="" />

				</div>

			</div>

      
    )
}

export default Card