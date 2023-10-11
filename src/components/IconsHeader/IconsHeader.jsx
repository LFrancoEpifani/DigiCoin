import React from 'react'
import { Icon } from '@iconify/react';

export default function IconsHeader() {
  return (
    <div className='flex text-xl gap-4'>
    <Icon icon="ri:twitter-fill"/>
    <Icon icon="ic:baseline-discord" />
    <Icon icon="mdi:user" />
</div>
  )
}

