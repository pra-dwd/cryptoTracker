import React from 'react'
import './paisa.css';

const paisa = ({ name,image, symbol, price, volume,marketcap,pricechange}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coins">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price.toLocaleString()}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {
                        pricechange < 0 ? 
                            (<p className="code-percent red" >{pricechange.toFixed(2)}%</p>) 
                            : (<p className="code=percent green">{pricechange.toFixed(2)}%</p> )
                    }
                    <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
                </div>
            </div>
        </div>
    )
} 

export default paisa;
