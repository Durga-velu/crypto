
import {useEffect, useState } from 'react'

import './App.css/'

const App = () => {

  let [currency,setCurrency]=useState()

   useEffect(()=>{
   
    const render=async()=>{
      let data=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
          
      let response=await data.json()
     
      setCurrency(response)
    }

    render()
  },[])

      console.log(currency);
      
  return (
  <>
   <div className='container'>
 
        <table className='table'>
          <tbody>       
            { currency.map((data)=>{
                  return <tr id={data.id}>
                          <td ><div className='coinsImg'>
                            <img src={data.image} alt="img"/>
                            </div>
                                <div className='name'>{data.name}</div></td>
                          <td className='symbol'>{data.symbol.toUpperCase()}</td>
                          <td className='curr-Price'>{data.current_price}</td>
                          <td className='volume'>{data.total_volume}</td>
                          <td className="percentage">{parseFloat(data.price_change_24h).toFixed(2)}%</td>
                          <td className='market-cap'>Mkr cap:{data.market_cap}</td>
                        </tr>
                       })
              }

            </tbody>  
        </table>   
   
   </div>
  </>
  )
}

export default App


