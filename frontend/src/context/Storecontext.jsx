import React from 'react'
import { createContext } from 'react'

import { food_list } from '../assets/assets';
export const StoreContext=createContext(null);


export const StoreContextProvider = (props) => {



const contextValue={
    food_list

}

  return (
    <div>

        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
      
    </div>
  )
}

