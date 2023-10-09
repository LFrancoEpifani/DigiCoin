import React from 'react'
import { Icon } from '@iconify/react';


export default function Navegation() {
  return (
    <div className='flex justify-between'>
        <nav >
            <ul className='flex list-none gap-8 text-lg nav'>
                <li><a href="">Home</a></li>
                <li><a href="">Market</a></li>
                <li><a href="">Choose us</a></li>
                <li><a href="">Join</a></li>
            </ul>
        </nav>
    </div>
  )
}
