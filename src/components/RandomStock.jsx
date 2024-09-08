import { useState, useEffect } from 'react';
import StockList from './StockList';
import { FB } from '../services/Constants';


export default function RandomStock(){
    const [stocks, setStocks] = useState([]);

    const fetchData = async () => {
        try {
          const response = await FB();
          setStocks(response.data);
          console.log(setStocks);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData);

    useEffect( () => {
      fetchData(stocks);
    }, [stocks])

    const handleButton = () => {
      return(
          <StockList stock={stocks} /> 
      )
    }
    

    return(
          <div>
          {/* <div> <ul>{ stocks }</ul> </div> */}
          <br></br>
          <button onClick={() => (handleButton)}>
            Generate Stock
          </button>
          
        </div>
    )
}










