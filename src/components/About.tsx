import { useContext } from "react"
import "../styling/about.css"
import { AppContext } from "../AppContext"

const About = () => {
  const {screenLoad} = useContext(AppContext)

  return (
<section className="about-section">
  <div className={screenLoad ? "intro showIntroSpan" : "closeIntroSpan intro"}>Hi there👋,<span >I'm Adebest</span> and i really enjoy building stuff😉</div>
    <h1>
        Adebest Adeniran
    </h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa perspiciatis deserunt ad doloremque sint iste saepe libero beatae eligendi maiores adipisci iure necessitatibus nulla totam odio quaerat, non rem tenetur.</p>
</section>
  )
}

export default About
