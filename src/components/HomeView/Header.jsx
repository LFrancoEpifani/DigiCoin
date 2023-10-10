import React from 'react'
import Navegation from '../Navegation/Navegation'
import Main from '../MainContent/Main'
import IconsHeader from '../IconsHeader/IconsHeader'
import Coins from '../Coins/Coins'

export default function Header() {
  return (
    <>
    <div className='flex justify-between p-8 items-center text-white'>
        <h1 className='text-3xl uppercase'>DigiCoin</h1>
        <Navegation/>
        <IconsHeader/>
    </div>
    <div>
        <Main/>
        <Coins/>
    </div>
    </>
  )
}
