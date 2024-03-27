import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {

    return (
        <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
            <h3>Github Search</h3>
            <span>
                <Link to="/GithubSearch/" className='mr-8'>Главная страница</Link>
                <Link to="/GithubSearch/favourites">Избранное</Link>
            </span>
        </nav>
    )
}