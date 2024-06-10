import { ReactElement, ReactNode, createContext, useEffect, useState } from "react";
import { contextType } from "./types";

const initialContext:contextType = {
    screenLoad:false
}

export const AppContext  = createContext<contextType>(initialContext)


export const AppProvider = ({children}:{children:ReactElement}):ReactNode=>{
const [screenLoad,setScreenLoad] = useState<boolean>(false)
    

useEffect(()=>{
setScreenLoad(true)
},[])


    return <AppContext.Provider value={{screenLoad}}>
        {children}
    </AppContext.Provider>
}