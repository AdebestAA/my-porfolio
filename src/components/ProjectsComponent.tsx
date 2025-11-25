

const projectLists = [
    {
        id:8,
        logo:"streetops.png",
        title:"StreetOps",
        about:"The backbone for your grind",
        link:"https://www.streetops.ng/"
    },
    {
        id:1,
        logo:"/experts-corner.png",
        title:"Expert's Corner",
        about:"An encyclopedia for medical professionals",
        link:"https://ec.orakle.digital/"
    },
    {
        id:2,
        logo:"/vest-logo.png",
        title:"VestVale Estate",
        about:"A visionary real estate development company",
        link:"https://vestvaleestate.com/"
    },
    {
        id:3,
        logo:"",
        title:"Admin Dashboard",
        about:"A dashboard with different charts",
        link:"https://admin-dashboard-xyz.vercel.app/"
    },
    {
        id:4,
        logo:"/vechtron-logo-two.svg",
        title:"Vechtron",
        about:"Ai-powered Assistant for cars",
        link:"https://vechtron-build.vercel.app/"
    },
    {
        id:5,
        logo:"",
        title:"Paige",
        about:"********",
        link:"https://paige-demo-seven.vercel.app/"
    },
    {
        id:6,
        logo:"",
        title:"Medscape",
        about:"Patient Case Simulations",
        link:"https://medscape.vercel.app/"
    },
    {
        id:7,
        logo:"",
        title:"Food Reecipe",
        about:"find your favourite recipe",
        link:"https://food-recipe-fit.vercel.app/"
    },
]
const ProjectsComponent = () => {
  return (
    <article className='mt-8'>
<h1 className='text-center font-semibold pb-4'>PROJECTS</h1>


<section className='flex flex-col gap-y-3'>
    {
        projectLists.map((item,index)=>{

            return <a href={item.link} className='inline-block'  target='_blank' key={index + 1}>
<div className='flex gap-x-4 border-borderOne border-1 rounded-md w-full p-2 '>
    <figure className='border-borderOne border-1  rounded-md w-[40px] h-[40px] flex items-center justify-center'>
<img src={item.logo ? item.logo : "/not-available.png"} alt={item.title} />

    </figure>
<div>
    <h1 className='font-semibold text-sm'>{item.title}</h1>
    <p className='text-sm'>{item.about}</p>
</div>

</div>
            </a>
        })
    }
</section>


    </article>
  )
}

export default ProjectsComponent