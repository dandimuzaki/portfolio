import './App.css'
import profile from './assets/profile.png'
import Badge from './components/badge'
import Button from './components/Button'
import ButtonOutlined from './components/ButtonOutlined'
import { Experience } from './components/Experience'
import Projects from './components/Projects'
import { TechnicalSkills } from './components/TechnicalSkills'
import Section from './layouts/Section'

function App() {
  return (
    <>
      <header className='px-16 h-16 flex items-center text-white fixed z-3 w-full bg-background'>
        <ul className='flex justify-center items-center gap-8'>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </header>
      <section className='overflow-hidden h-screen w-full bg-background grid grid-cols-2 relative p-16'>
        <div className='z-2 flex justify-end flex-col gap-6'>
          <p className='text-9xl text-accent font-bold'>
            Dandi<br/>
            Muzaki
          </p>
        </div>
        
        <div className='absolute w-full h-full pt-32 flex justify-center'>
          <div className='w-[400px]'>
            <img className='h-full w-full object-cover' src={profile} alt="Dandi Muzaki"/>
          </div>
          <div className='z-2 flex items-center justify-center rotate-350 left-98 text-white bg-primary hover:h-38 hover:w-38 transition-all h-36 w-36 absolute rounded-full text-xl'>
            Portfolio
          </div>
          <div className='p-8 bottom-10 flex flex-col justify-center rotate-10 right-90 text-white bg-secondary hover:h-50 hover:w-50 transition-all h-48 w-48 absolute rounded-full text-xl'>
            <p className='text-left w-full'>Full-Stack</p><p className='text-right w-full'>Developer</p>
          </div>
        </div>
                
        <div className='z-2 flex justify-start flex-col gap-4 pl-48'>
          <Badge text={"This is me"}/>
          <p className='text-4xl text-accent font-bold'>
            Full-Stack Developer<br/>based in Indonesia
          </p>
          <p className='text-white'>I design and build reliable web applications, from responsive frontends to high-performance backend systems.</p>
          <div className='flex gap-6 mt-2'>
            <a href="#projects">
              <button className='cursor-pointer bg-primary px-3 py-2 text-lg text-white font-bold w-fit rounded-lg'>
                View Projects
              </button>
            </a>
            <a href="/Dandi_Muhamad_Zaki.pdf" download>
              <button className='cursor-pointer px-2 py-1 text-lg text-white font-bold w-fit rounded-lg border-3 border-[var(--accent)]'>
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
      <Section id="skills" className="grid md:grid-cols-[5fr_3fr] gap-4 md:gap-16 bg-background-secondary">
        <div className='md:order-2 flex items-start flex-col gap-2 md:gap-4 h-full w-full text-white'>
          <Badge text={"Skills"}/>
          <h2 className='text-3xl md:text-5xl font-bold'>Technical Skills</h2>
          <p className='text-sm md:text-base'>I am a Full Stack Developer with a strong foundation in building data-driven and scalable web applications.</p>
        </div>
        <TechnicalSkills/>
      </Section>
      <Section id="experiences" className="grid md:grid-cols-[3fr_5fr] gap-4 md:gap-16 md:py-0">
        <div className='md:py-16 flex items-start flex-col gap-2 md:gap-4 h-full w-full text-white'>
          <Badge text={"Experiences"}/>
          <h2 className='text-3xl md:text-5xl font-bold'>Learning By Experience</h2>
          <p className='text-sm md:text-base'>I have experience developing end-to-end systems including e-commerce platforms, booking systems, and analytics dashboards.</p>
        </div>
        <Experience/>
      </Section>
      <Section id="projects" className="bg-background-secondary">
        <div className='flex items-start flex-col gap-2 md:gap-4 h-full w-full text-white'>
          <Badge text={"Projects"}/>
          <h2 className='text-white text-3xl md:text-5xl font-bold'>My Projects</h2>
          <Projects/>
        </div>
      </Section>
    </>
  )
}

export default App
