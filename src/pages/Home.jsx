import { useNav } from '../customHooks/useNav';
import star from '../assets/star-icon.png';
import arrow from '../assets/south_black.svg'


function Home() {

    const homeRef = useNav('Home');

    return ( 
        <div ref={homeRef} className="home" id='home'>
            <img src={star} alt="star" className='home--star-icon'/>
            <h1>Alejandra</h1>
            <h1>Monroy</h1>
            <h2>Computer Engineer | Frontend Developer</h2>
            <img src={arrow} alt="check" />
        </div>
     );
}

export default Home;