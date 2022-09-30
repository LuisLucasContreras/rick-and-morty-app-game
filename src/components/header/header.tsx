import React from 'react'
import './header-style.css'
import a from '@/assets/Rick_and_Morty.webp'
import { Link, NavLink, useLocation } from 'react-router-dom';

// const style: React.CSSProperties = {
//   top: 0,
//   position: 'fixed',
//   height:"50px",
//   width:"100%",
// }

const Header = () => {

	const location = useLocation()

	
	

	const activeStyle = (isActive: boolean): string => {
		if(isActive)return "active"
		return ""
	}

	return (
		<header  className='header'>

		
			<Link to={'/'}>
				<img src={a} alt="" width={150} />
			</Link>


			{
				location.pathname !== '/' && (
					<nav>
						<NavLink className={({ isActive }) => activeStyle(isActive)} to={'/cartas'}>CARTAS</NavLink>
						<NavLink to={'/juegos'}>JUEGOS</NavLink>
					</nav>
				)
			}


			
		</header>
	)
}

export default Header