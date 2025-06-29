import { useEffect, useState } from "react";
import { DoughnutChart } from "./DoughnutChart";
import WatchListItem from './WatchListItem';
import axios from "axios"

const WatchList = () => {
  const [watchlist , setWatchList] = useState([])

 useEffect(()=>{
     axios.get("http://localhost:3000/watchlist").then((res)=>{
       setWatchList(res.data);
     })
 
 
   },[]);


  return (
    <div className='watchlist-container'>
      <div className='search-container'>
        <input type="text" name='search' placeholder='Search eg: infy,bse' className='search' />
      </div>
      <span className='counts'>{watchlist.length} / 50</span>
      

      <ul className='list'>
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
      
     <DoughnutChart/>
    </div>
  )
}

export default WatchList



