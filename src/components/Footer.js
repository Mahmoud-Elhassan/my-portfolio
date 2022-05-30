import LI from "../images/linkedin.svg"
import GH from "../images/github.svg"

const Footer = () => (
    <footer id='footer'>
        Designed & Developed by Mahmoud Ali
        <div className='social'>
            <a
                href='https://www.linkedin.com/in/mahmoud-ali0/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
            >
                <img src={LI} alt='' />
            </a>
            <a
                href='https://github.com/Mahmoud-Elhassan'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
            >
                <img src={GH} alt='' />
            </a>
        </div>
    </footer>
)

export default Footer
