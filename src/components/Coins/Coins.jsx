import React from 'react';
import { Icon } from '@iconify/react';

export default function Coins() {
  return (
    <div className='slider-coins grid grid-cols-4 justify-between p-8'>
      <div className='flex flex-col items-center'>
        <Icon icon="logos:bitcoin" color="#f8a541" fontSize={"90px"} />
        <h3 className="coinName">Bitcoin <span className='percentage'>-0.99%</span></h3>
        <p className='price'>$ 26.227.05</p>
      </div>
      <div className='flex flex-col items-center'>
        <Icon icon="mdi:ethereum" color="#8a92b2" fontSize={"90px"} />
        <h3 className="coinName">Ethereum <span className='percentage'>-2.44%</span></h3>
        <p className='price'>1.508.69</p>
      </div>
      <div className='flex flex-col items-center'>
        <Icon icon="simple-icons:tether" color="#009393" fontSize={"90px"} />
        <h3 className="coinName">Tether <span className='percentage'>-0.04%</span></h3>
        <p className='price'>0.95</p>
      </div>
      <div className='flex flex-col items-center'>
        <Icon icon="mingcute:bnb-line" color="#f0b90b" fontSize={"90px"} />
        <h3 className="coinName">BNB <span className='percentage'>-1.73%</span></h3>
        <p className='price'>197.22</p>
      </div>
    </div>
  );
}
