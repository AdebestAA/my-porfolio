

const skills = ["HTML/CSS","Javascript","Typescript","ReactJs","NextJs","Tailwind CSS","GSAP","MongoDB","Hygraph","Firebase","NodeJs","ExpressJs"]
const TechAndSkills = () => {
  return (
    <div className="mt-6 " >
 <h1 className="text-center font-bold pb-8">TECHNOLOGIES / SKILLS</h1>
        <section className='text-center flex flex-wrap gap-y-3 justify-between items-center '>

        {skills.map((skill,index)=>{
            return <div key={index}  className={`md:w-[40%]  w-[45%]  text-start border-1 border-borderOne px-2 rounded-sm font-semibold`}> {skill} </div>
            
        })}
        </section>
    </div>
  )
}

export default TechAndSkills