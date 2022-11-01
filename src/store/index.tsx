import {useLocalObservable} from 'mobx-react'
import React from 'react';
import {Consist} from "src/types/Alltypes" 
 

type ContextInterface = {
  inputData: Consist[]
  sendData: (inputs:  Consist[]) => void
}

export const StoreContext = React.createContext<ContextInterface | null>(null);

const StorePovider = ({children}:any) => {
  const store = useLocalObservable(()=>({
    inputData:  [{label: '', type: ''}],
    sendData: (inputs: Consist[] )=>{
      store.inputData = inputs
    }
  }))

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}
export default StorePovider
