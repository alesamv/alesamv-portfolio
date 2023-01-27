import blink from '../assets/blink-eye.png'
import programmer from '../assets/about_programmer.svg'
import download from '../assets/file_download.svg'

function About() {
    return ( 
        <div className='about'>
            <div className='about--title'>
               <h2>Hi, soy Ale</h2>
                <img src={blink} alt="emoji" /> 
            </div>
            <div className='about--containers'>
                <div className='about--description'>
                    <p>Soy recién egresada de la carrera de Ingeniería en Computación de la UNAM.</p>
                    
                    <p>Actualmente busco una oportunidad en el área de Web Development, me gusta desarrollar el Frontend de los sistemas 💜.</p>

                    <p>Además estoy comenzando a adentrarme en el mundo de UX|UI.</p>
                </div>

                <div className='about--download'>
                    <a href="https://drive.google.com/file/d/1G83r9v1A5xIMqF-RwtDFv-BGbJME479o/view?usp=sharing" className='about--buttonCV' target="_blank" rel="noreferrer">
                        <img src={download} alt="download icon" />
                        <p>Descarga mi CV</p>
                    </a>
                    <img src= {programmer} alt="woman_code" className='about--woman'/>
                </div>
            </div>
            
        </div>
     );
}

export default About;