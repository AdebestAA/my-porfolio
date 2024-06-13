import { ReactElement, ReactNode, SyntheticEvent, createContext, useEffect, useRef, useState } from "react";
import { contextType, typeErrorMsg, typeUserInput } from "./types";

const initialContext:contextType = {
    screenLoad:false,
    moveToContact:()=>{}, 
    contactRef:null,
    moveToProject:()=>{}, 
    projectRef:null,
    setUserInput:()=>{},
    userInput:{email:"",message:""},
    handleSubmit:()=>{},
    errorMsg:{
        emailErrorMsg:"",
        messageErrorMsg:""
    },
    setErrorMsg:()=>{}
}

export const AppContext  = createContext<contextType>(initialContext)


export const AppProvider = ({children}:{children:ReactElement}):ReactNode=>{
const [screenLoad,setScreenLoad] = useState<boolean>(false)
const contactRef = useRef<HTMLElement | null>(null)
const projectRef = useRef<HTMLElement | null>(null)
const [userInput,setUserInput] = useState<typeUserInput>({
    email:"",
    message:""
})
const [errorMsg,setErrorMsg] = useState<typeErrorMsg>({
      emailErrorMsg:"",
    messageErrorMsg:""
})
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
const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

// handleSubmit button
const handleSubmit = (e:SyntheticEvent)=>{
e.preventDefault()

if (!userInput.message && !userInput.email) {
      setErrorMsg({emailErrorMsg:"input field is empty",messageErrorMsg:"message field is empty"})
      return
    }
    else if (!userInput.message ) {
        setErrorMsg({emailErrorMsg:"",messageErrorMsg:"message field is empty"})
        return
    }
    else if ( !userInput.email) {
        setErrorMsg({emailErrorMsg:"input field is empty",messageErrorMsg:""})
        return
    }
    if (!userInput.email) {
   setErrorMsg({...errorMsg,emailErrorMsg:"field is empty"})
   console.log("field is empty");
   return
}
if (!emailRegEx.test(userInput.email)) {
    setErrorMsg({...errorMsg,emailErrorMsg:"invalid email address"})
        return
    }

}

useEffect(()=>{
  // conditions for email
  
 if (userInput.email && !emailRegEx.test(userInput.email) ) {
 setErrorMsg({emailErrorMsg:"invalid email address",messageErrorMsg:""})
    
    }
    if (emailRegEx.test(userInput.email)) {
      setErrorMsg({...errorMsg,emailErrorMsg:""})
    }
    if (!userInput.email) {
       setErrorMsg({...errorMsg,emailErrorMsg:""})
    }
},[userInput.email])

useEffect(()=>{
setScreenLoad(true)
},[])

useEffect(()=>{
    if (userInput.message) {
          setErrorMsg({...errorMsg,messageErrorMsg:""})
    }
},[userInput.message])

    return <AppContext.Provider value={{
        screenLoad,
        contactRef,
        moveToContact,
        projectRef,
        moveToProject,
        setUserInput,
        userInput,
        handleSubmit,
        errorMsg,
        setErrorMsg
        }}>
        {children}
    </AppContext.Provider>
}