export default function Projects() {
  const projects = [
    {
      name: "Agripacul - A Fullstack E-commerce for Agricultural Products",
      img: "/agripacul.gif",
      demo: "https://agripacul.vercel.app/",
      github: "https://github.com/dandimuzaki/agripacul"
    },
    {
      name: "ShuttleTime - A Booking Platform for Badminton Courts",
      img: "/shuttletime.gif",
      demo: "https://badminton-app-kohl.vercel.app/",
      github: "https://github.com/dandimuzaki/badminton-app"
    },
    {
      name: "StoryStar — Blog Platform with Content Management",
      img: "/storystar.gif",
      demo: "https://storystar-production.up.railway.app/",
      github: "https://github.com/dandimuzaki/storystar"
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-8 mt-4">
      {projects.map((p) => (<div className="space-y-4">
        <img src={p.img} alt={p.name} className="w-full h-fit"/>
        <h3 className="text-white font-semibold text-lg">{p.name}</h3>
        <div className='grid grid-cols-2 gap-4'>
          <a href={p.demo}><button className='cursor-pointer bg-primary w-full px-3 py-2 text-white font-semibold w-fit rounded-lg'>View Demo</button></a>
          <a href={p.github}><button className='cursor-pointer bg-secondary w-full px-3 py-2 text-white font-semibold w-fit rounded-lg'>Visit Repo</button></a>
        </div>
      </div>))}
    </div>
  )
}