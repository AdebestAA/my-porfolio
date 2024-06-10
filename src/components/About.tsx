import { useContext } from "react"
import "../styling/about.css"
import { AppContext } from "../AppContext"

const About = () => {
  const {screenLoad} = useContext(AppContext)

  return (
<section className="about-section">
  <div className="intro">Hi there,<span className={screenLoad ? "showIntroSpan" : "closeIntroSpan"}>I'm Adebest</span></div>
    <h1>
        Adebest Adeniran
    </h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa perspiciatis deserunt ad doloremque sint iste saepe libero beatae eligendi maiores adipisci iure necessitatibus nulla totam odio quaerat, non rem tenetur.</p>
</section>
  )
}

export default About
