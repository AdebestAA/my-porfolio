import { useContext } from "react"
import "../styling/about.css"
import { AppContext } from "../AppContext"

const About = () => {
  const {screenLoad} = useContext(AppContext)



  return (
<section className="about-section">
  <div className={screenLoad ? "intro showIntroSpan" : "closeIntroSpan intro"}>Hi 👋,<span >I'm Adebest</span> and I enjoy building stuff😉</div>
    <p className="myinfo">I am <span className="myname">Adeniran Adeseun</span>, a FrontEnd web developer that utilizes web technologies to create interactive,responsive,animated and fun websites with visually appealing and aesthetically pleasing designs that give users great experiences. </p>
</section>
  )
}

export default About
