

const skills = ["HTML/CSS","Javascript","Typescript","ReactJs","NextJs","Tailwind CSS","GSAP","MongoDB","Hygraph","Firebase","NodeJs","ExpressJs"]
const TechAndSkills = () => {
  return (
    <div>
 <h1 className="text-center font-bold">TECHNOLOGIES / SKILLS</h1>
        <div className='text-center'>

        {skills.map((skill,index)=>{
            return <span key={skill} className='font-semibold text-lg'> {skill} {index +1 == skills.length ? "" : "|"} </span>
            
        })}
        </div>
    </div>
  )
}

export default TechAndSkills