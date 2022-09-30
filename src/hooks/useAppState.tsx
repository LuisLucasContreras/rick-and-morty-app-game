import { setAppState } from '@/redux/states';
import { charactersTotales } from '../services/characters.service'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../redux/store';



const useAppState = () => {

    const state = useSelector((store : AppStore) => store.appState)
    const  dispatch = useDispatch()
    const [load, setLoad] = useState(true)
   


    const init = async() => {

        setLoad(true)
        
        const currentDate     = new Date(Date.now())
        
        const currentMonth    = currentDate.getMonth() + 1
        
        const currentDay      = currentDate.getDate() - 1
       
        

        if(state.mesActual != 0 || state.mesActual != currentMonth){ 

            
            const totalDaysMonth  = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

            const charactersTotal = await charactersTotales()

            const charactersForDay = parseInt( (charactersTotal /  totalDaysMonth).toFixed(0)) 

            dispatch(
                setAppState({
                    mesActual         : currentMonth,
                    diaActual         : currentDay,
                    diasTotalesMes    : totalDaysMonth,
                    personajesTotales : charactersTotal,
                    personajesPorDia  : charactersForDay,
                    personajesDiaActual   : (currentDay == totalDaysMonth - 1)
                        ? charactersTotal - charactersForDay 
                        : charactersForDay * currentDay 
                    
                }) 
            )

        }

      
    
        else if (state.diaActual != currentDay){
            
            dispatch(
                setAppState({
                    ...state,
                    diaActual             : currentDay,
                    personajesDiaActual: (currentDay == state.diasTotalesMes - 1)
                        ? state.personajesTotales - state.personajesPorDia 
                        : state.personajesPorDia * currentDay, 
                } )
            )

            

        }
        setLoad(false)
    }

    useEffect(() => {


        init()
      
      
    }, [])
    

    return {
        state,
        load
    }
}

export default useAppState