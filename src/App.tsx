import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"


function App() {

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

export default App
