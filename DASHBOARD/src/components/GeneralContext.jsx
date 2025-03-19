import React,{useState,createContext,useContext} from 'react'
import BuyActionWindow from './BuyActionWindow';

const GeneralContext=createContext();

const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen,setIsBuyWindowOpen]=useState(false);
    const [selectedStockUID, setSelectedStockUID]=useState("")

    const handleOpenBuyClick=(uid)=>{
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    }

    const handleCloseBuyWindow=()=>{
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");

    }
  return (
   
    <GeneralContext.Provider value={{isBuyWindowOpen,selectedStockUID,handleOpenBuyClick,handleCloseBuyWindow}}>
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID}/>}
    </GeneralContext.Provider>
  )
}

export {GeneralContext,GeneralContextProvider}