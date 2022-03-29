


export default function StockList(props){
  console.log('StockListprops=', props)

  const stock = props.stock
  

    return (
      <div> 
        <div>
          <ul>
            <li>
              <p>Company: { stock.companyName}</p>
              <p>Stock Change(%): { stock.change}</p>
              <p>Stock Percentage (-/+): { stock.changePercent }</p>
              <p>Last Price($): { stock.latestPrice }</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }