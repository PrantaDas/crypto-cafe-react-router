import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
        setLoading(false);
    }, [])
    return (
        <>
            {loading ? (<Spinner></Spinner>) : (<div className='px-4 pt-20 mx-auto max-w-7xl md:px-2'>
                <p className='text-center mb-5 text-3xl font-bold text-gray-800 '>Available Crypto Currencies</p>
                <p className='text-center text-xl font-normal text-gray-500'>Total Coins:{coins.length}</p>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-center md:justify-center gap-4 mt-10'>
                    {
                        coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)
                    }
                </div>
            </div>)}
        </>
    );
};

export default Coins;