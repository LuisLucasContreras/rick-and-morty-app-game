import Portada from '@/components/portada/Portada'
import portada from '@/assets/portadaHome.jpg'
import portadaJuegos from '@/assets/fondo-juegos-page.png'
import portadaCartas from '@/assets/portada-cartas.jpg'
import './style.css'
import MainData from './MainData'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

	let navigate                = useNavigate();

    return (
		<section className='home flex flex-clm'>

			<Portada img={portada }height={600}/>

			<MainData />

			<div className='navegacion-main flex flex-clm'>



				<div className='navegacion felx' onClick={() => navigate(`/juegos`)}>
					<img src={portadaJuegos} alt="" />
					<h2>JUEGOS</h2>
				</div>

				<div className='navegacion felx' onClick={() => navigate(`/cartas`)}>
					<img src={portadaCartas} alt="" />
					<h2>CARTAS</h2>
				</div>
			</div>

		</section>
    )
}

export default Home