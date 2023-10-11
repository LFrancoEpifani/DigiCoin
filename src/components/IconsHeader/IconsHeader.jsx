import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function IconsHeader() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const moon = document.getElementById('moon')
  const sun = document.getElementById('sun')

  return (
    <div className='flex text-xl gap-4'>
    <button className='flex border gap-4 rounded-xl bg-neutral-300'>
    <Icon id='moon' icon="solar:moon-bold" onClick={toggleDarkMode}/>
    <Icon id='sun' icon="ph:sun-bold" onClick={toggleDarkMode} />
    </button>
</div>
  )
}

