import { useEffect, useState } from "react";
import SearchStocks from "./SearchStocks";
import StockList from "./StockList";
import { Search } from "../services/Constants";


export default function SearchResults(){
    // inittialize the ticker list to the full list passed in props
    const [stockSearch, setStockSearch] = useState([])
    const [stockName, setStockName] = useState('')
    console.log('stockName =', stockName)
    
    // const handleStockChange = () => {
    const fetchData = async (event) => {
      // event.preventDefault();


        try {
          const response = await Search(event);
          setStockSearch(response);
          console.log('setStockSearch=', setStockSearch);
        } catch (error) {
          console.log(error);
        }
      }
    // }
    
    //handle the filter, and upstate when the filter value changes
    //store the filter state and filter the list of gifs to display


    const handleStockChange = (event) => {
      // event.preventDefault();

    //     console.log("This is EVENT=", event)
    //     const tickerClick = event; 
        setStockName(event)

    //  grab value from event
    //  const stockName = event.target.value;
    //  console.log(tickerClick)

        // return (
        //   <div>
        // <StockList stock={stockSearch} />
        // </div>
        // )
  
    }
    

    useEffect( () => {
      fetchData(stockName)
      // .then(res => setStockSearch(res))
  }, [stockName])
  console.log(stockSearch)
    


    
    return (
        <div>
          <h1>This is the SearchStock Section</h1>
        <br></br>
        <div className="search-section">
        <div>
            <label htmlFor="search-gif">Search by Company Name: </label>
            <br></br>
            <br></br>
              <form onSubmit={handleStockChange}>
              <input type="text" value={stockName} onChange={event => handleStockChange(event.target.value)} id="search-pane-input" placeholder="Search for Company"/>
            <div className="button-div">
              <button type="submit" >Search Ticker</button>
            </div>
            </form>
        </div>
    </div>
        <StockList stock={stockSearch} />
        </div>

   )
    //All of the data is hoisted to the top of the tree in the container
    // and it is passed to the child components 
}