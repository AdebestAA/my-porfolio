import { ReactElement } from "react"
import "../styling/contact.css"
import { IoLogoGithub } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Contact = ():ReactElement => {
  return (
 <section className="contact-section">
<p className="contact-paragraph">you've got projects,gigs or a role for me?</p>
<form action="">
<input type="email"
placeholder="email"
className="email" />
<textarea name=""
    id=""
    cols={30}
    rows={10}
    className="textarea"
    placeholder="enter message"
   ></textarea>
<br />
<button type="submit" className="send-btn">send</button>
</form>
    <p className="or">or</p>
    <p className="contact-me"> contact me  </p> 
    <section className="contact-links">
      <a href="">< IoLogoYoutube/></a>
      <a href=""><FaSquareTwitter/></a>
      <a href=""><IoLogoGithub/></a>
    </section>
 </section>
  )
}

export default Contact