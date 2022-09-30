
import portada from '@/assets/fondo-juegos-page.png'
import { Routes, Route, Outlet, useParams } from "react-router-dom";
import Portada from '@/components/portada/Portada'
import './style.css'

const Juegos = () => {

  
    return (
        <section className='flex flex-clm'>

            <Portada img={portada }height={500}/>

            <Outlet />
            
        </section>
    )
}

export default Juegos