import React from 'react'

export const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <footer className='text-center text-bold font-black text-1xl pb-5'>
            Proyecto hecho en Vite - React por Diego Rojas Nava - <span className='text-indigo-800'>&copy;diegorona.com {year}</span>
        </footer>
    )
}
