import React from 'react'
import Navegation from '../Navegation/Navegation'
import IconComp from '../IconsComp/Icons'
import Main from '../MainContent/Main'

export default function Header() {
  return (
    <>
    <div className='flex justify-between p-8 items-center text-white'>
        <h1 className='text-3xl uppercase'>DigiCoin</h1>
        <Navegation/>
        <IconComp/>
    </div>
    <div>
        <Main/>
    </div>
    </>
  )
}
