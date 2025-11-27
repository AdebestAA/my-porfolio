
import useTheme from "./hooks/useTheme";
import { Github, Mail, Moon, Sun,Twitter, Youtube,  } from "lucide-react";
import ProjectsComponent from "./components/ProjectsComponent";
import Footer from "./components/Footer";
import TechAndSkills from "./components/tech-and-skils";
import { parseTwemoji } from "./lib/ParseEmoji";
import { useEffect } from "react";



const contact = [
  {
    id:1,
    contactMedium:"Email",
    icon:Mail,
    link:"mailto:adeseunadebest@gmail.com"
  },
  {
    id:2,
    contactMedium:"Github",
    icon:Github,
    link:"https://github.com/AdebestAA",
  },
  {
    id:3,
    contactMedium:"X(Twitter)",
    icon:Twitter,
    link:"https://x.com/AdebestPaschal",
  },
  {
    id:4,
    contactMedium:"Youtube",
    icon:Youtube,
    link:"https://www.youtube.com/@AdebestPaschal",
  }
]

function App() {

 const {theme,toggleTheme} = useTheme()

  

 useEffect(() => {
  parseTwemoji();
}, []);

  return (

    <div className="mx-auto md:w-[50%] w-[90%] py-4 md:mt-16 text-textOne">

    <header className="justify-between flex pb-4">
    
      <a href="https://playground.adebest.com/" target="_blank"  className="text-red-500 font-semibold">playground</a>
<button onClick={toggleTheme} className="text-textOne transition-all ease-in-out duration-500">{theme == "light" ? <Moon /> : <Sun />  }</button>
    </header>
    <article className="mb-4 mt-10">
    <h1 className=" font-semibold pb-8">Hi there 👋, I'm Adebest and I enjoy building stuff😉.</h1>

<div className="my-6">

 <p> Nice to have you in my corner of the Internet where I showcase what I have built, what I'm currently building and also my skills.</p>
 <p>I am <span className="font-semibold">Adeniran Adeseun </span>, a FrontEnd Web developer that builds visually appealing, high-performance, highly optimized and user-friendly websites.</p>
<br />
 <p> Quick one, years ago when I was just starting out in web development, I built this quiz project and I would like you to check it out, trust me, it won't take much of your time😁..it's a country-related/geography-based quiz that you would really enjoy. Cick <a  target='_blank' href="https://this-quiz-project.vercel.app/" className="text-red-500">here</a> to check it out.</p>
<br />
<p>  Growing up as a kid, I really loved animations and visual effects and as you can guess the love hasn't faded away and that's the reason I created a dedicated website to be my digital playground.The website will be  showcasing the smooth, fun, clean,and web-based animations and visual effects I have worked on and would be working on. Cick <a  target='_blank' href="https://playground.adebest.com" className="text-red-500">here</a> to check out my  playground😉</p>



</div>
    </article>
<TechAndSkills/>

<ProjectsComponent/>

    {/* Contact */}

<div className="my-8">
  <h1 className="text-center font-semibold pb-6">CONTACT</h1>

  <div className="flex justify-evenly">
   {contact.map((item,index)=>{


return <a href={item.link} key={index + 1} target="_blank" className="opacity-animate">
<div className="flex flex-col items-center justify-center">
  <span><item.icon /></span>
  <span className="font-light text-[0.8rem]">{item.contactMedium}</span>
</div>
</a>
   })}
  </div>
</div>
<Footer/>
    </div>
  )
}

export default App
