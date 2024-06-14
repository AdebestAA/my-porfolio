import { ReactElement, useContext, } from "react"
import "../styling/contact.css"
import { IoLogoGithub } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { AppContext } from "../AppContext";
import { MdEmail } from "react-icons/md";
const Contact = ():ReactElement => {
const {
  contactRef,
  setUserInput,
  userInput,
  handleSubmit,
  errorMsg,
  form
} = useContext(AppContext)

// const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
// useEffect(()=>{
//  if (userInput.email && !emailRegEx.test(userInput.email) ) {
     
//        setErrorMsg({...errorMsg,emailErrorMsg:userInput.email})
//       console.log("what");
      
//     }
//         console.log(errorMsg)
    

//     if (emailRegEx.test(userInput.email)) {
//       setErrorMsg({...errorMsg,emailErrorMsg:""})
//     }
//     if (!userInput.email) {
//        setErrorMsg({...errorMsg,emailErrorMsg:""})
//     }

//     if (userInput.message) {
//           setErrorMsg({...errorMsg,messageErrorMsg:""})
//     }
// },[userInput.email,userInput.message])



  return (
 <section className="contact-section" ref={contactRef}>
  <h1 className="contact-me-header">Contact me </h1>
<p className="contact-paragraph">You've got projects,gigs or a role for me?</p>

<form
//  action="https://formsubmit.co/61c202c2d9d9ca00034ea32c376ad210"
//  method="POST"
 onSubmit={handleSubmit}
 ref={form}
 >
<input type="email"
placeholder="Email Address"
className="email" 
name="email"
onChange={(e)=>{
  setUserInput({...userInput,[e.target.name]:e.target.value})
}}
value={userInput.email}
/>
{errorMsg.emailErrorMsg && (<p className="error-msg">{errorMsg.emailErrorMsg}</p>)}
<textarea 
value={userInput.message}
    name="message"
    id="messsage"
    cols={30}
    rows={10}
    className="textarea"
    placeholder="enter message"
    onChange={(e)=>{
    setUserInput({...userInput,[e.target.name]:e.target.value})
    }}
   ></textarea>
   {errorMsg.messageErrorMsg && (<p className="error-msg">{errorMsg.messageErrorMsg}</p>)}
<br />
<button type="submit" className="send-btn">send</button>
</form>
    <p className="or">or</p>
    <p className="contact-me"> contact me  </p> 
    <section className="contact-links">
      <a href="https://youtube.com/@AdebestAA" target="_blank">< IoLogoYoutube/></a>
      <a href="https://x.com/AAdebestA" target="_blank"><FaSquareTwitter/></a>
      <a href="https://github.com/AdebestAA" target="_blank"><IoLogoGithub/></a>
      <a href="mailto:aadebesta@gmail.com" target="_blank">< MdEmail/></a>
    </section>
 </section>
  )
}

export default Contact
