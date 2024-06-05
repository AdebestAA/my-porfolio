import { skillsData } from "../SkillData"
import { skillsDataType } from "../types"
import "../styling/skills.css"

const Skills = () => {
  return (
    <div>
      <h1>skills/tools</h1>

      <article className="skill-container">
{skillsData.map((item:skillsDataType,index:number)=>{

  return (
    <section key={item.id} className={item.class}>
      <div className="svg-icon-container">
      {item.icon}
      </div>
     <h5>{item.name}</h5>
    </section>
  )
})}
      </article>
    </div>
  )
}

export default Skills
