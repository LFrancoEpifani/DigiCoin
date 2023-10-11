import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../Table/Table';

export default function CryptoApi() {
  
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      );
      setCoins(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table coins={coins}/>
    </div>
  );
}
