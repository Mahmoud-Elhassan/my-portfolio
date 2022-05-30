import movie from "../images/movie.jpg"
import crypto from "../images/cryptocurrency.jpg"
import chat from "../images/pexels-tim-samuel-5838215 (6).jpg"
import sass from "../images/sass-original.svg"
import react from "../images/react-original.svg"
import rwd from "../images/responsive-design.svg"
import api from "../images/api.svg"

const Work = () => (
    <section id='work'>
        <h1 className='reveal-list'>02. Recent Projects</h1>
        <a
            href='https://chat-app-001.netlify.app/'
            className='card reveal-list'
            rel='noreferrer'
            target='_blank'
        >
            <img src={chat} alt='' />
            <footer>
                <p>Chat Website</p>
                <div className='skills-used'>
                    <img src={react} alt='' className='skill one'></img>
                    <img src={sass} alt='' className='skill two'></img>
                    <img src={rwd} alt='' className='skill three'></img>
                </div>
            </footer>
        </a>
        <a
            href='https://movweb.netlify.app/'
            className='card reveal-list'
            rel='noreferrer'
            target='_blank'
        >
            <img src={movie} alt='' />
            <footer>
                <p>Movie Website</p>
                <div className='skills-used'>
                    <img src={react} alt='' className='skill one'></img>
                    <img src={sass} alt='' className='skill two'></img>
                    <img src={rwd} alt='' className='skill three'></img>
                    <img src={api} alt='' className='skill four'></img>
                </div>
            </footer>
        </a>

        <a
            href='https://cryptocurrency-live-tracker.netlify.app/'
            className='card reveal-list'
            rel='noreferrer'
            target='_blank'
        >
            <img src={crypto} alt='' />
            <footer>
                <p>Cryptocurrency</p>
                <div className='skills-used'>
                    <img src={react} alt='' className='skill one'></img>
                    <img src={sass} alt='' className='skill two'></img>
                    <img src={rwd} alt='' className='skill three'></img>
                    <img src={api} alt='' className='skill four'></img>
                </div>
            </footer>
        </a>
    </section>
)

export default Work
