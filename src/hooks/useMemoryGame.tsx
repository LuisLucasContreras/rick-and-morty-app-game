import { setJuego, setJuegos } from '@/redux/states/juegosSlice'
import { AppStore } from '@/redux/store'
import { charactersByIdsImg, CharactersMemoryGame, CharactersOnlyImg, charactersTotales } from '@/services/characters.service'
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import useTimeKeeper from './useTimeKeeper'
import { Juego } from '../redux/states/juegosSlice';
import { usePersonajesAleatorios } from '@/utils/peresonajesAleatorios'



interface CardSelected {
    element : any,
    id      : string
}

interface MemoryGameState {
    gameTime          : number,
    finalized         : boolean,
    movements         : number
    characters    : CharactersMemoryGame[]
    selectedCardOne   : CardSelected | undefined, 
    selectedCardTwo   : CardSelected | undefined,
    oddCards          : number,
  
}

const initialState : MemoryGameState = {
    gameTime          : 0,
    finalized         : false,
    movements         : 0,
    characters        : [],
    selectedCardOne   : undefined,
    selectedCardTwo   : undefined,
    oddCards          : 9,
   
}

type typesMemoryGame = 
    | { type: 'setGameTime', }
    | { type: 'setFinalized' }
    | { type: 'setMovements' }
    | { type: 'setGameCharacters', payload: CharactersMemoryGame[] }
    | { type: 'setSelectedCards' }
    | { type: 'setSelectedCardOne', payload: CardSelected | undefined }
    | { type: 'setSelectedCardTwo', payload: CardSelected | undefined }
    | { type: 'setOddCards', payload: number }
   


const reducerMemoryGame = (state : MemoryGameState, action : typesMemoryGame) => { 

    switch(action.type){
        case 'setGameTime':
            return { ...state, gameTime : state.gameTime + 1 }
        case 'setFinalized':
            return { ...state, finalized : true }
        case 'setMovements':    
            return { ...state, movements : state.movements + 1 }
        case 'setGameCharacters':
            return { ...state, characters : action.payload }
        case 'setSelectedCardOne':
            return { ...state, selectedCardOne : action.payload }
        case 'setSelectedCardTwo':
            return { ...state, selectedCardTwo : action.payload }
        case 'setSelectedCards':
            return { ...state, selectedCardOne : undefined, selectedCardTwo : undefined }
        case 'setOddCards':
            return { ...state, oddCards : action.payload }
      
        default:
            return state
    }
}

interface Props {
    
    
}

const useMemoryGame = ( juego                   : Juego ) => {


    const {timeInMinutes, timeInSeconds,toggledTimeKeeper}                                = useTimeKeeper()
    const [state, dispatch]                                                               = useReducer(reducerMemoryGame, initialState)
    const {selectedCardOne,selectedCardTwo, characters, finalized, oddCards, movements}   = state
    const [load, setLoad]                                                                 = useState(true)
    const [personajesAleatorios]                                                          = usePersonajesAleatorios(oddCards)
    const dispatchState                                                                   = useDispatch()
   
    const getCharacters = async() => {

        let respCharacters                                = await charactersByIdsImg(personajesAleatorios!)

        let charactersMemoryGame : CharactersMemoryGame[] = respCharacters.map((character ) => switchMatched(character))

        dispatch({ 
            type    : 'setGameCharacters',
            payload : desordenar([...charactersMemoryGame,...charactersMemoryGame])
        })
      
        setLoad(false)
    }
    
    function desordenar(arr : any[]){
        var t = arr.sort((a:any,b:any) => (Math.random()-0.5));
        return [...t];
    }

    useEffect(() => {
       
    
         getCharacters()
       
        
    }, [personajesAleatorios])

    useEffect(() => {

        if(oddCards > 0) return
     
      
        
        toggledTimeKeeper(false)

        dispatch({ type: 'setFinalized' })
        
        dispatchState(setJuego({
            ...juego,
            tiempoJugado : {
                minutos : timeInMinutes,
                segundos : timeInSeconds,
            }
        

        }))

      
        
    }, [characters])

    useEffect(() => {

        if(finalized) return

        if(selectedCardTwo) validateGame();
        
        
    }, [selectedCardTwo])

    const validateGame = () => { 


        if(selectedCardOne?.id == selectedCardTwo?.id){


            dispatch({
                type    : 'setGameCharacters',
                payload : characters.map(
                    ( character ) => switchMatched( character, selectedCardOne?.id )
                )
            })

            dispatch({ type: 'setOddCards', payload: state.oddCards - 1 })

            dispatch({ type: 'setSelectedCards' })
            
            return

        }
        

        setTimeout(() => {
            
            selectedCardOne?.element.classList.remove("rotate-card");
            selectedCardTwo?.element.classList.remove("rotate-card");

            dispatch({ type: 'setSelectedCards' })

        }, 1000);
            
       

    }

    const switchMatched = (character : CharactersMemoryGame | CharactersOnlyImg, id?: string) => {

        if(!id) return { ...character, pairedUp : false }
        
        return { ...character, pairedUp : character.id == id ? true : false }

    }
    
    

    const onClickCard = (e:any, idCharacter : string) => {

        if (selectedCardTwo) {
            return
        }

        if(movements == 0) toggledTimeKeeper(true)

        dispatch({ type: 'setMovements' })

        const elementHtml = e.target.parentElement.parentElement;

        elementHtml.classList.add('rotate-card');

        const cardSelected = { element: elementHtml, id: idCharacter };

        

        (!selectedCardOne)
        ?   dispatch({
                type    : 'setSelectedCardOne',
                payload : cardSelected
            })

        :   dispatch({
                type    : 'setSelectedCardTwo',
                payload : cardSelected
            })

       

       
    }


    


    return {
        timeInMinutes,
        timeInSeconds,
        characters,
        onClickCard,
        movements,
        finalized,
        load
    }
}

export default useMemoryGame