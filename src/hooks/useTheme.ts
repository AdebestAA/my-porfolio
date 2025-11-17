
import  { useEffect, useState } from 'react'

export const useTheme = () => {
 const getSystemTheme = ()=> window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" ;

 const [theme,setTheme] = useState<"dark" | "light">(localStorage.getItem("theme") as "dark" | "light"  || getSystemTheme())
  


//  apply theme to document 

useEffect(()=>{
document.documentElement.classList.remove("light","dark")
document.documentElement.classList.add(theme)

localStorage.setItem("theme",theme)

},[theme])

const toggleTheme = ()=> {

    setTheme(theme => theme == "light" ? "dark" : "light")
}



return {theme,toggleTheme}


}

export default useTheme