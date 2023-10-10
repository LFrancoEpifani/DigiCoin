import React from 'react'
import CryptoApi from '../CryptoAPI/CryptoApi'

export default function Market() {
  return (
    <div className=''>
        <h2 className='market text-white text-4xl uppercase'>Market Update</h2>
        <CryptoApi/>
    </div>
  )
}
