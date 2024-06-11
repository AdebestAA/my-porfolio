export type skillsDataType = {id:number,name:string,class:string,icon:any}

export type projectsDataType = {id:number,about:string,link:string,madeWith:string,tools:string[],name:string,github:string}

export type contextType = {
    screenLoad:boolean,
    moveToContact:() => void,
    contactRef:any,
    moveToProject:() => void,
    projectRef:any
}