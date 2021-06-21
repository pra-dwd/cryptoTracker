import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Paisa from './paisa';
function App() {
  const[coins,setCoins]=useState([]);
  const[search,setSearch]=useState('');

  useEffect(() =>{
    axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      ).then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error));
  },[]);

  const handleChange= e => {
    setSearch(e.target.value)
  };
  
  const filteredCoins = coins.filter(
    coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
   
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coint-text">Search For Coin</h1>
        <form >
          <input type ='text' placeholder='Search' className='coin-input'
          onChange={handleChange}/>
        </form>
      </div>
      {
        filteredCoins.map( coin => {
          return( 
          <Paisa 
            key={coin.id} 
            name={coin.name}
            image ={coin.image}
            symbol ={coin.symbol}
            price = {coin.market_cap}
            volume ={coin.current_price}
            marketcap={coin.total_volume}
            pricechange={coin.price_change_percentage_24h}
            />
          );
        })
      }
  </div>

  );
}
export default App;