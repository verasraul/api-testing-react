import axios from "axios";



export async function Constants(){
    const Result = await axios.get(`https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=${process.env.REACT_APP_STOCKAPI_KEY}`)
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}


// `https://cloud.iexapis.com/stable/stock/${searchterm}/quote?token=${process.env.REACT_APP_STOCKAPI_KEY}`
// `https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=${process.env.REACT_APP_STOCKAPI_KEY}`
export async function Search(searchterm){
    const SearchResult = await axios.get(`https://cloud.iexapis.com/stable/stock/${searchterm}/quote?token=${process.env.REACT_APP_STOCKAPI_KEY}`)
    .then(({ data }) => {
        return data;
      });
      return SearchResult;
    
}

