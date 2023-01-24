import star from '../assets/star-icon.png'
import gmail from '../assets/gmail.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import download from '../assets/file_download.svg'

function Contact() {
  return (
    <div className='contact'>
        <img src={star} alt="icon" className='contact--icon' />
        <h1>Let's work together!</h1>
        <div className="contact--rs">
            <a href="mailto:alesamv@gmail.com">
                <div className="contact--gmail">
                    <img src={gmail} alt="gmail icon" />
                    <h3>alesamv@gmail.com</h3>
                </div>
            </a>
            <a href="https://github.com/alesamv" target="_blank" rel="noreferrer" >
                <div className="contact--github">
                    <img src={github} alt="github icon" />
                    <h3>alesamv</h3>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/alesamv/" target="_blank" rel="noreferrer">
                <div className="contact--linkedin">
                    <img src={linkedin} alt="linkedin icon" />
                    <h3>@alesamv</h3>
                </div>
            </a>
        </div>
        <div className='contact--download'>
                <a href="https://drive.google.com/file/d/1G83r9v1A5xIMqF-RwtDFv-BGbJME479o/view?usp=sharing" className='about--buttonCV' target="_blank" rel="noreferrer">
                    <img src={download} alt="download icon" />
                    <p>Descarga mi CV</p>
                </a> 
        </div>
    </div>
    )
}

export default Contact;