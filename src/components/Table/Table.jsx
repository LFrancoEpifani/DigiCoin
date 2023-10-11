import React, { useState } from 'react';

const titles = ['#', 'Name', 'Price', 'Price Change', '24h Volume'];

export default function Table({ coins }) {
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 5;

  const displayData = () => {
    const start = (currentPage - 1) * coinsPerPage;
    const end = start + coinsPerPage;

    return coins.slice(start, end).map((coin, index) => (
      <tr key={index} className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700">
        <td scope="row" className="p-2 font-medium text-white whitespace-nowrap dark:text-white coins">
        {start + index + 1}
        </td>
        <td scope="row" className="flex items-center p-2 font-medium text-white whitespace-nowrap dark:text-white coins me-4">
          <img src={coin.image} alt={coin.name} style={{ width: "5%" }} className='m-4 img-fluid' />
          <span>{coin.name}</span>
          <span className='ms-3 text-gray-500 uppercase'>{coin.symbol}</span>
        </td>
        <td scope="row" className="p-2 font-medium text-white whitespace-nowrap dark:text-white coins">
          $ {coin.current_price}
        </td>
        <td scope="row" className={coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}>
          {coin.price_change_percentage_24h}
        </td>
        <td scope="row" className="p-2 font-medium text-white whitespace-nowrap dark:text-white coins">
          {coin.total_volume}
        </td>
      </tr>
    ));
  };

  const totalPages = Math.ceil(coins.length / coinsPerPage);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="">
      <div className='flex flex-col justify-center items-center'>
      <table className="w-11/12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {titles.map((title, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData()}
        </tbody>
      </table>
      <div className='my-12 flex gap-4' id="pagination-buttons">
        <button className='h-8 w-44 border border-white text-white' onClick={previousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className='h-8 w-44 border border-white text-white' onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      </div>
    </div>
  );
}
