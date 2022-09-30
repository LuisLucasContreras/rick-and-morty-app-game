import { useRef, useState } from 'react';
import angle from "@/assets/angle (1).svg"
import "./carta.css"
import { CharactersById } from '@/models/personaje';


interface Props {
    character: CharactersById
}

const Carta = ( { character } : Props ) => {

    const [abrirCarta, setAbrirCarta]   = useState(false)
    const carta                         = useRef<any>()

    const {  id, name,status,image, origin, location  } = character

    return (
        <article  className={`carta flex flex-clm ${abrirCarta ? "cartaAbierta" :""}`} >

            <img 
                ref           = {carta}
                className     = 'img-character'
                src           = {image}
                alt           = ""
            />

            <div className='info-carta flex flex-clm' >

                <h2 translate='no'>{id} - { name }</h2>

                <div className='flex isData'>
                    
                    <span translate='no' className={`estado ${status}`}>
                        {status}
                    </span>
                   
                </div>
                
               <div className='flex flex-clm parrafo-info'>
                    <h4 >Last Known location</h4>
                    <p translate='no'>{location.name}</p>
               </div>
   

               <div className='flex flex-clm parrafo-info'>
                    <h4>First Seen in</h4>
                    <p translate='no'>{origin.name}</p>
               </div>

            </div>

            <img  className='angle' src={angle}  onClick={() => setAbrirCarta(!abrirCarta)} />
            
        </article>
    )
}

export default Carta
