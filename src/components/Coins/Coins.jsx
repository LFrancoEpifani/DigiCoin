import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function Coins() {
  const [coinData, setCoinData] = useState([
    {
      name: 'Bitcoin',
      icon: 'logos:bitcoin',
      color: '#f8a541',
      percentage: -0.99,
      price: 26227.05,
    },
    {
      name: 'Ethereum',
      icon: 'mdi:ethereum',
      color: '#8a92b2',
      percentage: -2.44,
      price: 1508.69,
    },
    {
      name: 'Tether',
      icon: 'simple-icons:tether',
      color: '#009393',
      percentage: -0.04,
      price: 0.95,
    },
    {
      name: 'BNB',
      icon: 'mingcute:bnb-line',
      color: '#f0b90b',
      percentage: -1.73,
      price: 197.22,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = coinData.map((coin) => ({
        ...coin,
        percentage: coin.percentage + (Math.random() - 0.5) * 2,
        price: coin.price + (Math.random() - 0.5) * 10,
      }));
      setCoinData(updatedData);
    }, 3000);

    return () => clearInterval(interval); 
  }, [coinData]);

  return (
    <div className='slider-coins grid grid-cols-4 justify-between p-8'>
      {coinData.map((coin, index) => (
        <div key={index} className='flex flex-col items-center'>
          <Icon icon={coin.icon} color={coin.color} fontSize={"90px"} />
          <h3 className="coinName">{coin.name} <span className={coin.percentage < 0 ? 'text-red-600' : 'text-green-600'}>{coin.percentage.toFixed(2)}%</span></h3>
          <p className='price'>$ {coin.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
