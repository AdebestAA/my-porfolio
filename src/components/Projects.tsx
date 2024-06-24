import "../styling/projects.css"
import { ProjectsData } from "../ProjectsData"
import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { projectsDataType } from "../types";
import { AppContext } from "../AppContext";
import { useContext } from "react";

const Projects = () => {

const {projectRef} = useContext(AppContext)

  return (
  <section className="projects-section" ref={projectRef} >
<h1 className="projects">projects</h1>
<article className="each-project-container">
{ProjectsData.map((item:projectsDataType)=>{

  return <div key={item.id} className="each-project">
<h1 className="project-name">{item.name}</h1>
<h1 className="made-with">{item.madeWith} <span>built it</span></h1>
<p className="about">{item.about}</p>
<div className="links-and-tools">

<aside className="tools">
  {item.tools.map((tool:string,index?:number)=>{
    
    return <span key={index}>
    {tool} 
  </span>
})}</aside>
<aside className="links">
<a href={item.github} target="_blank"><IoLogoGithub/></a>
<a href={item.link}  target="_blank">< TbWorld/></a>
</aside>
</div>
  </div>
})}
</article>
<h3 className="want-to-see-more">Want to see more of me?</h3>
<p className="see-more">kindly pay a visit to my <a 
href="https://github.com/AdebestAA" className="my-github-link" >Github Page</a> to see more projects with complex functionalities and logic I have worked on.</p>
  </section>
  )
}

export default Projects
