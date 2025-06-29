import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GeneralContextProvider } from "../Context/GeneralContext"

import WatchList from '../WatchList/WatchList'
import Summary from '../Pages/Summary'
import Orders from '../Pages/Orders'
import Holdings from '../Pages/Holdings'
import Positions from '../Pages/Positions'
import Funds from '../Pages/Funds'
import Apps from '../Pages/Apps'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>



      <div className='content'>
        <Routes>
          <Route path={"/summary"} element={<Summary/>} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/holdings"} element={<Holdings />} />
          <Route path={"/positions"} element={<Positions />} />
          <Route path={"/funds"} element={<Funds />} />
          <Route path={"/app"} element={<Apps />} />

        </Routes>
      </div>

    </div>
  )
}

export default Dashboard