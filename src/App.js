import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import AnimatedCursor from "react-animated-cursor"
//
import "./styles/App.scss"
//
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Work from "./components/Work"
import Footer from "./components/Footer"

const App = () => {
    window.addEventListener("scroll", () => {
        let reveals = document.querySelectorAll(".reveal-list")
        for (let i = 0; i < reveals.length; i++) {
            let windowheight = window.innerHeight
            let revealtop = reveals[i].getBoundingClientRect().top
            let revealpoint = 150
            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add("active")
            } else {
                reveals[i].classList.remove("active")
            }
        }
    })

    return (
        <ParallaxProvider>
            <Hero Parallax={Parallax} />
            <About Parallax={Parallax} />
            <Work Parallax={Parallax} />
            <Skills Parallax={Parallax} />
            <Contact />
            <Footer />
            <AnimatedCursor
                innerSize={8}
                outerSize={25}
                color='231, 231, 239'
                outerAlpha={0.3}
                innerScale={0.7}
                outerScale={2.5}
            />
        </ParallaxProvider>
    )
}

export default App
