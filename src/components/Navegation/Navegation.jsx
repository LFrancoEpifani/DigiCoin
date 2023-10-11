import React from 'react'


export default function Navegation() {
  return (
    <div className='flex justify-between'>
        <nav className=''>
            <ul className='flex list-none gap-8 text-lg nav justify-center items-center'>
                <li className='active'>Home</li>
                <li>Market</li>
                <li>Choose us</li>
                <li>Join</li>
            </ul>
        </nav>
    </div>
  )
}
