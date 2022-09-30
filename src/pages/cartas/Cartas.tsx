import Portada from '@/components/portada/Portada'
import portada from '@/assets/portada-cartas.jpg'
import { Outlet } from 'react-router-dom'

const CartasPage = () => {
    return (
        <section className='flex flex-clm'>

          <Portada img={portada }height={500}/>

          <Outlet />
        
        </section>
    )
}

export default CartasPage