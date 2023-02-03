import robot from '../assets/robot.svg'
import HTML from "../assets/html.png"
import CSS from '../assets/css.png'
import JS from '../assets/js.png'
import HC from '../assets/HostingCompany.png'
import RT from '../assets/Restaurant.png'
import AD from '../assets/advice.png'
import TLW from '../assets/tailwind.png'

function Projects() {

  return (
    <div className='projects'>
      <div className="projects--title">
        <img src={robot} alt="work" />
        <h2>Proyectos</h2>
      </div>

      <div className="projects--cards">
        <div className="projects--card">
          <a href="https://alesamv.github.io/Hosting-Company/"><img src={HC} alt="project" className='projects--mainImage'/></a>
          <div className="projects--tech">
            <div className="">
              <img src={HTML} alt="HTML" />
              <img src={CSS} alt="CSS" />
              <img src={JS} alt="JS" />
            </div>
            <div className="projects--code">
              <a href="https://github.com/alesamv/Hosting-Company">CODE</a>
            </div> 
          </div>
            <div className="projects--description">
              <h4>Hosting Company</h4>
              <p>Página de servicios de Hosting.</p>
            </div>          
        </div>

        <div className="projects--card">
          <a href="https://github.com/alesamv/Restaurant-Page"><img src={RT} alt="project" className='projects--mainImage'/></a>
          <div className="projects--tech">
            <div className="">
              <img src={HTML} alt="HTML" />
              <img src={CSS} alt="CSS" />
              <img src={JS} alt="JS" />
            </div>
            <div className="projects--code">
              <a href="https://github.com/alesamv/Restaurant-Page">CODE</a>
            </div> 
          </div>
            <div className="projects--description">
              <h4 className="projects--cardTitle">Restaurant Page</h4>
              <p>Página de servicios de un restaurant.</p>
            </div> 
        </div>

        <div className="projects--card">
          <a href="https://github.com/alesamv/Advice-Generator"><img src={AD} alt="project" className='projects--mainImage'/></a>
          <div className="projects--tech">
            <div className="">
              <img src={HTML} alt="HTML" />
              <img src={TLW} alt="CSS" />
              <img src={JS} alt="JS" />
            </div>
            <div className="projects--code">
              <a href="https://alesamv.github.io/Advice-Generator/">CODE</a>
            </div> 
          </div>
            <div className="projects--description">
              <h4 className="projects--cardTitle">Advice Generator</h4>
              <p>Página que usa Advice Slip JSON API para generar consejos. </p>
            </div> 
            <div ></div>
          
        </div>
      </div>

    </div>
  )
}

export default Projects