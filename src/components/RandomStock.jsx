import { useState, useEffect } from 'react';
import { Constants } from '../services/Constants';
import StockList from './StockList';


export default function RandomStock(){
    const [stocks, setStocks] = useState([]);
    const fetchData = async () => {
        try {
          const response = await Constants();
          setStocks(response);
          // console.log(setStocks);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData);

    useEffect(() => {
      fetchData();
    }, [])

    const handleButton = () => {
        <StockList stock={stocks} /> 
      }
    

    return(
          <div>
          {/* <div> <ul>{ stocks }</ul> </div> */}
          <br></br>
          <button onClick={handleButton}>
            Generate Stock
          </button>
          
        </div>
    )
}










