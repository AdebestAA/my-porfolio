

const skills = ["HTML/CSS","Javascript","Typescript","ReactJs","NextJs","Tailwind CSS","GSAP","MongoDB","Hygraph","Firebase","NodeJs","ExpressJs"]
const TechAndSkills = () => {
  return (
    <div className="mt-6 " >
 <h1 className="text-center font-bold">TECHNOLOGIES / SKILLS</h1>
        <li className='text-center flex flex-wrap justify-evenly items-center'>

        {skills.map((skill,index)=>{
            return <li key={index}  className={`w-[40%] text-lg  text-start`}> {skill} </li>
            
        })}
        </li>
    </div>
  )
}

export default TechAndSkills