import { skillsData } from "../SkillData"
import { skillsDataType } from "../types"
import "../styling/skills.css"

const Skills = () => {
  return (
    <div>
      <h1 className="skill-header">skills/tools</h1>

      <article className="skill-container">
{skillsData.map((item:skillsDataType,index:number)=>{

  return (
      <aside className="skill-aside"  key={item.id}>
    <section className={`${item.class} ${index % 2 === 0 ? "left-to-right" : "right-to-left"}`}>

      <div className="svg-icon-container">
      {item.icon}
      </div>
     <h5 className="item-name">{item.name}</h5>
    </section>
      </aside>
  )
})}
      </article>
    </div>
  )
}

export default Skills
