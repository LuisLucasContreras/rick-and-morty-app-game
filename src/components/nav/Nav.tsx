import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
    return (
        <nav className='flex'>
            <NavLink to="cartas">Cartas</NavLink>
            <NavLink to="juegos">Juegos</NavLink>
        </nav>
    )
}

export default Nav