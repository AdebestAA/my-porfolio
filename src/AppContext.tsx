import { ReactElement, ReactNode, createContext, useEffect, useRef, useState } from "react";
import { contextType } from "./types";

const initialContext:contextType = {
    screenLoad:false,
    moveToContact:()=>{}, 
    contactRef:null,
    moveToProject:()=>{}, 
    projectRef:null,
}

export const AppContext  = createContext<contextType>(initialContext)


export const AppProvider = ({children}:{children:ReactElement}):ReactNode=>{
const [screenLoad,setScreenLoad] = useState<boolean>(false)
const contactRef = useRef<HTMLElement | null>(null)
const projectRef = useRef<HTMLElement | null>(null)

const moveToContact = ()=>{
    let contactRefEl = contactRef.current as HTMLElement
    contactRefEl.scrollIntoView({
        behavior:"smooth"
    })
}
const moveToProject = ()=>{
    let projectRefEl = projectRef.current as HTMLElement
    projectRefEl.scrollIntoView({
        behavior:"smooth"
    })
}

useEffect(()=>{
setScreenLoad(true)
},[])


    return <AppContext.Provider value={{
        screenLoad,
        contactRef,
        moveToContact,
        projectRef,
        moveToProject,
        }}>
        {children}
    </AppContext.Provider>
}