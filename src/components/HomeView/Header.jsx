import React from 'react'
import Navegation from '../Navegation/Navegation'
import Main from '../MainContent/Main'
import IconsHeader from '../IconsHeader/IconsHeader'
import Coins from '../Coins/Coins'

export default function Header() {
  return (
    <>
    <div className='flex justify-between p-4 items-center text-white sticky top-0 z-50'>
        <h1 className='text-3xl uppercase font-bold'>DigiCoin</h1>
        <Navegation/>
        <IconsHeader/>
    </div>
    <div>
        <Main className="relative"/>
        <Coins/>
    </div>
    </>
  )
}
