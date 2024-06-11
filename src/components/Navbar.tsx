import { useContext } from "react"
import { AppContext } from "../AppContext"


const Navbar = () => {
  const {moveToContact,moveToProject} = useContext(AppContext)
  return (
  <nav className="navbar">
    <button className="nav-btn" onClick={moveToProject}>Projects</button>
    {/* <a href="#projects">Projects</a> */}
    {/* <button className="nav-btn">⚫</button> */}
    <button className="nav-btn" onClick={moveToContact}>Contact</button>
  </nav>
  )
}

export default Navbar
