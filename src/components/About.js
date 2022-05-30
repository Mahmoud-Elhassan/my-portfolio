import myPhoto from "../images/2022030kj3_172231-02_50.jpeg"

const About = () => (
    <section id='about'>
        <h1 className='reveal-list'>01. About me</h1>
        <div className='about-content reveal-list'>
            <img src={myPhoto} alt='me' />
            <p>
                I am a Front End developer with industry experience building
                websites and web applications. Specialized in JavaScript and
                React, have professional experience working with React Native. I
                also have experience working with Node.js, TypeScript, Next.js,
                and Testing. Strong creative and analytical skills, Team player
                with an eye for detail.
            </p>
        </div>
    </section>
)

export default About
