import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../assets/user.png'


const Header = () => {

    const navigation = [
        {
            label : "TV Shows",
            href : "tv"
        },
        {
            label : "Movies",
            href : "movie"
        }
    ]

  return (
    <header className = "fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
        <div className = 'container mx-auto px-3 flex items-center h-full'>
            <div>
                <img
                    src = {logo}
                    alt = {logo}
                    width = {120}
                />
            </div>

            <nav className='hidden lg:/flex items-center gap-1 ml-5'>
                {
                    navigation.map((nav,index) =>{
                        return(
                            <div>
                                
                                <NavLink key = {nav.label} to = {nav.href} className = {({isActive}) => 'px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}'}>
                                    {nav.label}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </nav>

            <div className='ml-auto'>
                <div className='w-10 h-10'>
                    <img
                        src={userIcon}
                        width="w-full h-full"
                    />
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header
