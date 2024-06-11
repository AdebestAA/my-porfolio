import { useContext } from "react"
import "../styling/about.css"
import { AppContext } from "../AppContext"

const About = () => {
  const {screenLoad} = useContext(AppContext)



  return (
<section className="about-section">
  <div className={screenLoad ? "intro showIntroSpan" : "closeIntroSpan intro"}>Hi there👋,<span >I'm Adebest</span> and I enjoy building stuff😉</div>
    <p className="myinfo">I'm <span className="myname">Adeniran Adeseun</span> a FrontEnd web developer that creates visually  appealing and aesthetically pleasing websites with amazing,complex functionalities that give users great experience </p>
    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa perspiciatis deserunt ad doloremque sint iste saepe libero beatae eligendi maiores adipisci iure necessitatibus nulla totam odio quaerat, non rem tenetur.</p> */}
</section>
  )
}

export default About
