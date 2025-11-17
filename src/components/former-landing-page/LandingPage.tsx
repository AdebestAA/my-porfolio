import About from "../About"
import Contact from "../Contact"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Projects from "../Projects"
import Skills from "../Skills"




const LandingPage = () => {
  return (
   <>
   <Navbar/>
    <div className="about-skills">
    <About/>
    <Skills/>
    </div>
    <div className="projects-contact">
    <Projects/>
    <Contact/>
    </div>
    <Footer/>
   </>
  )
}

export default LandingPage