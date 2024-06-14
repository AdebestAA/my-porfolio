import { SyntheticEvent } from "react"

export type skillsDataType = {id:number,name:string,class:string,icon:any}

export type projectsDataType = {id:number,about:string,link:string,madeWith:string,tools:string[],name:string,github:string}

export type typeUserInput = {
    email:string,
    message:string
}
export type typeErrorMsg = {
    emailErrorMsg:string,
    messageErrorMsg:string
}
export type contextType = {
    screenLoad:boolean,
    moveToContact:() => void,
    contactRef:any,
    moveToProject:() => void,
    projectRef:any,
    userInput:typeUserInput,
    setUserInput:React.Dispatch<React.SetStateAction<typeUserInput>>,
    handleSubmit:(e:SyntheticEvent)=> void,
    errorMsg:typeErrorMsg,
    setErrorMsg:React.Dispatch<React.SetStateAction<typeErrorMsg>>,
    form: any
}
