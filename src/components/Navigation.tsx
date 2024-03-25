import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {

    return (
        <nav className='flex justify-between bg-red-500'>
            <h3>Pet-Project</h3>
            <span>
                <Link to="/">Главная страница</Link>
                <Link to="/favourites">Избранное</Link>
            </span>
        </nav>
    )
}