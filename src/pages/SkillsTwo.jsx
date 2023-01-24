import woman from '../assets/woman_code.svg'
import c from '../assets/c.png'
import csharp from '../assets/csharp.png'
import cplus from '../assets/c++.png'
import java from '../assets/java.png'
import sqls from '../assets/sqlserver.png'
import sql from '../assets/sql.png'

function SkillsTwo() {
    return ( 
        <div className='skillstwo'>
            <img src={woman} alt="woman_code" />
            <div className='skillstwo--content'>
                <p>Durante mi carrera también he programado con C, Java, C#, C++, y he tocado uno que otro framework más. También soy habíl diseñando y creando bases de datos relacionales, tengo experiencia con SQL.</p>
                <p>Actualmente terminé un certificado de Diseño UX por Google, y sigo aprendiendo React para especializarme en ello.</p>
                <div className='skillstwo--images'>
                    <img src={c} alt="c" />
                    <img src={cplus} alt="c++" />
                    <img src={csharp} alt="c#" />
                    <img src={java} alt="java" />
                    <img src={sqls} alt="sql server" />
                    <img src={sql} alt="sql" />
                </div>
            </div>
        </div>
    );
}

export default SkillsTwo;
