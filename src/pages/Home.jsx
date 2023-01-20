import star from '../assets/star-icon.png';
import arrow from '../assets/south_black.svg'
import '../styles/styles.css';

function Home() {
    return ( 
        <div className="home">
            <img src={star} alt="star" className='home--star-icon'/>
            <h1>Alejandra</h1>
            <h1>Monroy</h1>
            <h2>Computer Engineer | Frontend Developer</h2>
            <img src={arrow} alt="check" />
        </div>
     );
}

export default Home;