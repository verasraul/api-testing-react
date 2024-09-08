


export default function StockList(props){
  console.log('StockListprops=', props)

  const backGroundColor = (num) => {
    if(num < 0){
       return 'red'
    }else if (num > 0){
        return 'green'
    }
}

  const stock = props.stock

    return (
      <div className="stock-info"> 
        <div className="name">
              <h1>{ stock.companyName} {stock.symbol}</h1>
        </div>

        <div className="price">
              <h3>Last Price($): { stock.latestPrice }</h3>
              <h3>Stock Change(%): { stock.change}</h3>
              <div className='up-down' style={{backgroundColor:backGroundColor(stock.changePercent)}}>
              <p>Stock Percentage: { stock.changePercent }</p>
              </div>
        </div>

      </div>
    )
  }