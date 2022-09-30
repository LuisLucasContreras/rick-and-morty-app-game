import  { useEffect, useState } from 'react'
import Carta from './Carta'
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { charactersByIds } from '@/services/characters.service';
import { CharactersById } from '../../../models/personaje';
import { Pagination } from '@/components/Pagination';
import Loading from '@/components/loading/Loading';

const Cartas = () => {

    const {personajes} = useSelector((state: AppStore) => state.personajes)

    
    
    const [characters, setCharacters]       = useState<CharactersById[]>([])
    const [page, setPage]                   = useState(1)
    const [loading, setLoading]             = useState(true)
    const [maxPorPagnia, setmaxPorPagnia]   = useState(15)


    const init = async () => {

    
        

        personajes.length > 0 && await obtenerInfoPersonajes(page)

        setLoading(false)

    }
    
    const obtenerInfoPersonajes = async(page : number) => {
        setLoading(true)
        const personajesPosPagina = obtenerPagina(page, maxPorPagnia,personajes)
        
        const respuesta = await charactersByIds(personajesPosPagina)
        
        setCharacters(respuesta)
        setLoading(false)
    }

     
    const obtenerPagina = (page:number, porPagina:number, arr:string[] = personajes)=>{

        let personajesPosPagina = []

        const personajesPagina = page * porPagina 

        const primerPersonaje = personajesPagina - porPagina

        for(let i = primerPersonaje ; i < personajesPagina; i += 1 ){

            personajesPosPagina.push(arr[i])

        }
        
        return personajesPosPagina
    }

  

    useEffect(() => {

      init()
        
        
    }, [page])

    if(loading) return  <Loading marginTop={80}/>
    
    if(personajes.length === 0) return  <h1 className='titulo'> NO TIENES CARTAS </h1>


    return (
        <section className='  flex-clm'>
           
           <div className='cartas flex'>
                {
                    characters?.map((character) => {
                        return <Carta key={character.id} character={character}/>
                    })
                }
           </div>
           
           <Pagination currentPage={page} maxPage={personajes.length / maxPorPagnia } setCurrentPage={(page:number)=> setPage(page)}/>
        </section>
    )
}

export default Cartas