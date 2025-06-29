import React from 'react'
import  {useState } from 'react'
import {KeyboardArrowDown,KeyboardArrowUp} from "@mui/icons-material"
import WatchListActions from './WatchListActions'

const WatchListItem = ({ stock, index }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);

  }

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <div className='item'>
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions stockName={stock.name} stock_id = {stock._id}/>}

    </li>
  )


}


export default WatchListItem