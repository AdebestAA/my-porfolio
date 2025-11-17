import { useState } from "react";
import LandingPage from "./components/former-landing-page/LandingPage"
import useTheme from "./hooks/useTheme";
import { Github, Mail, Moon, Sun,Twitter, Youtube,  } from "lucide-react";
import ProjectsComponent from "./components/ProjectsComponent";
import Footer from "./components/Footer";



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

  

  return (

    <div className="mx-auto md:w-[50%] w-[90%] py-4 md:mt-16 text-textOne">

    <header className="justify-between flex ">
      <button className="">PlayGround</button>
<button onClick={toggleTheme} className="text-textOne transition-all ease-in-out duration-500">{theme == "light" ? <Moon /> : <Sun />  }</button>
    </header>
    <article className="my-4">
    <h1 className=" font-semibold">Hi there 👋, I'm Adebest and I enjoy building stuff😉</h1>

    <p className="my-4">I am Adeniran Adeseun, a Website Developer that builds visually appealing, high-performance and highly optimized websites</p>
    </article>

    {/* Contact */}

<div className="my-8">
  <h1 className="text-center font-semibold pb-6">CONTACTS</h1>

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


<ProjectsComponent/>
<Footer/>
    </div>
  )
}

export default App
