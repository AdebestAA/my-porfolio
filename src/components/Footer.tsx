import { useEffect, useState } from "react"
import "../styling/footer.css"

const Footer = () => {
  const [time,setTime] = useState<string>("")
  const [date,setDate] = useState<string>("") 

  const addZero = (value : number | string): number | string=>{

     value= value as number < 10? "0" + value : value ;
     return value
  }
  useEffect(()=>{
  let interValVariable =  setInterval(()=>{
    // for time
    let seconds: number | string = new Date().getSeconds()
    let minutes: number | string = new Date().getMinutes()
    let hours: number | string = new Date().getHours()

    // for date

    let dateDay:number | string =  new Date().getDate()
    let dateMonth:number | string =  Number(new Date().getMonth() + 1)
    seconds = addZero(seconds)
    minutes = addZero(minutes)
    hours = addZero(hours)
    dateDay = addZero(dateDay)
    dateMonth = addZero(dateMonth)
      setTime( hours+ ":"+ minutes +":" + seconds) 
      setDate(dateDay +"/" + dateMonth   +"/" +new Date().getFullYear())
   },1000)

  return ()=> clearInterval(interValVariable)
  },[time])
  
  return (
  <footer className="footer">
   <span>{date}</span>,
   <span>{time}</span>
   <p>Adebest</p>
  </footer>
  )
}

export default Footer
