import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GeneralContextProvider } from "./GeneralContext"

import WatchList from './WatchList'
import Summary from './Summary'
import Orders from './Orders'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import Apps from './Apps'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <GeneralContextProvider>
        <WatchList />

      </GeneralContextProvider>



      <div className='content'>

        <Routes>
          <Route path={"/"} element={<Summary />} />
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