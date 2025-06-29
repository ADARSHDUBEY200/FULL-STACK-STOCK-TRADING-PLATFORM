import React,{useState,createContext,useContext} from 'react'
import BuyActionWindow from './BuyActionWindow';

const GeneralContext=createContext();

const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen,setIsBuyWindowOpen]=useState(false);
    const [selectedStockID, setSelectedStockID]=useState("")
    const [selectedStockName , setSelectedStockName] = useState("");
    console.log(selectedStockID + "This rerendered form the context");

    const handleOpenBuyClick=(stockName, stock_id)=>{
        setIsBuyWindowOpen(true);
        setSelectedStockID(stock_id);
        setSelectedStockName(stockName);
    }

    const handleCloseBuyWindow=()=>{
        setIsBuyWindowOpen(false);
        setSelectedStockID("");

    }
  return (
   
    <GeneralContext.Provider value={{isBuyWindowOpen,selectedStockID,handleOpenBuyClick,handleCloseBuyWindow,selectedStockName}}>
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow/>}
    </GeneralContext.Provider>
  )
}

export {GeneralContext,GeneralContextProvider}