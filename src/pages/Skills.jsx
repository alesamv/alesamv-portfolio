import { useNav } from '../customHooks/useNav';
import { Player } from '@lottiefiles/react-lottie-player';
import code from '../assets/code_b.svg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import sass from '../assets/sass.png'
import react from '../assets/react.png'
import python from '../assets/python.png'
import flask from '../assets/flask.png'
import mongo from '../assets/mongo.png'

function Skills() {

    const skillsRef = useNav('Skills');

    return (  
        <div ref={skillsRef} className='skills' id='skills'>
            <div className='skills--title'>
                <img src={code} alt="" />
                <h2>Tecnologías</h2>
            </div>

            <div className="skills--content">
                <div className="skills--firstColumn">
                    <div className="skills--column">
                        <div className="skills--column-images">
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={js} alt="js" />
                        </div>
                        <h4>HTML, CSS y JS</h4>
                        <p>El stack básico para construir cosas en la web.</p>
                    </div>

                    <div className="skills--column">
                        <div className="skills--column-images">
                            <img src={bootstrap} alt="bootstrap" />
                            <img src={tailwind} alt="tailwind" />
                            <img src={sass} alt="sass" />
                        </div>
                        <h4>Bootstrap, Tailwind y Sass</h4>
                        <p>Algunos frameworks CSS y un preprocesador para darle superpoderes a CSS.</p>
                    </div> 
                </div>
                
                <div className="skills--secondColumn">
                    <div className="skills--column">
                        <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_2glqweqs.json"
                        // style={{ height: '500px', width: '500px' }}
                        className='skills--player'>
                        </Player>
                    </div>
                </div>
                
                <div className="skills--thirdColumn">
                    <div className="skills--column">
                        <div className="skills--column-images">
                            <img src={react} alt="react" />
                        </div>
                        <h4>React</h4>
                        <p>Una librería para crear componentes en el Front.</p>
                    </div>

                    <div className="skills--column">
                        <div className="skills--column-images">
                            <img src={python} alt="python" />
                            <img src={flask} alt="flask" />
                            <img src={mongo} alt="mongo" />
                        </div>
                        <h4>Python, Flask y algo de MongoDB.</h4>
                        <p>Un lenguaje de programación junto su respectivo microframework, además he utilizado MongoDB para bases de datos No Relacionales.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Skills;