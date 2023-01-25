import work from '../assets/work.svg'
import star from '../assets/star-icon.png'
import woman from '../assets/work_woman.png'

function Work() {
  return (
    <div className='work'>
        <div className="work--title">
            <img src={work} alt="work" />
            <h2>Experiencia Laboral</h2>
        </div>

        <div className="work--content">
            <div className="work--jobs">
                <div className="work--job">
                    <div className="work--jobTitle">
                        <img src={star} alt="icon" />
                        <h4>Frontend Developer</h4>
                    </div>
                    <div>
                        <h5>DocDigitales</h5>
                        <h5>Enero 2022 - Abril 2022</h5>
                        <p>Desarrollo de las landings pages de la página principal de la empresa utilizando React.js. Apoyo en el área de UX para cambios en las páginas web. Y desarrollo de cambios en el sistema interno de la empresa.</p>
                    </div>
                </div>

                <div className="work--job">
                    <div className="work--jobTitle">
                        <img src={star} alt="icon" />
                        <h4>Ingeniera en Computación</h4>
                    </div>
                    <div>
                        <h5>Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas</h5>
                        <h5>Febrero 2020 - Enero 2021</h5>
                        <p>Planeación, creación y ejecución de actividades para el proyecto Escuela de código. <br/>
                        Participación en los módulos de Desarrollo Web, utilizando HTML, CSS, JavaScript, en Programación con Python y Administración de Sistemas Linux.</p>
                    </div>
                </div>
            </div>
            <img src={woman} alt="woman who code" className='work--woman'/>
        </div>

    </div>
  )
}

export default Work;
