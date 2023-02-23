import js from "../images/javascript-original.svg";
import ts from "../images/typescript-original.svg";
import sass from "../images/sass-original.svg";
import react from "../images/react-original.svg";
import rwd from "../images/responsive-design.svg";
import reactN from "../images/react-native-1.svg";
import next from "../images/nextjs-original-wordmark.svg";
import node from "../images/nodejs-original.svg";
import git from "../images/git-original.svg";
import fb from "../images/firebase-icon.svg";

const Skills = () => (
  <section id="skills-container">
    <h1 className="reveal-list">03. Skills & Technologies</h1>
    <div className="skills">
      <img
        className="one reveal-list"
        src={js}
        alt="JavaScipt"
        title="JavaScript"
      />
      <img
        className="two reveal-list"
        src={ts}
        alt="TypeScript"
        title="TypeScript"
      />
      <img className="three reveal-list" src={sass} alt="Sass" title="Sass" />
      <img
        className="four reveal-list"
        src={react}
        alt="React.js"
        title="React.js"
      />
      <img
        className="five reveal-list"
        src={reactN}
        alt="React Native"
        title="React Native"
      />
    </div>

    <div className="skills">
      <img
        className="one reveal-list"
        src={next}
        alt="Next.js"
        title="Next.js"
      />
      <img
        className="two reveal-list"
        src={node}
        alt="Node.js"
        title="Node.js"
      />
      <img
        className="three reveal-list"
        src={rwd}
        alt="Responsive web design"
        title="Responsive web design"
      />
      <img
        className="four reveal-list"
        src={fb}
        alt="firebase"
        title="Firebase"
      />
      <img className="five reveal-list" src={git} alt="Git" title="Git" />
    </div>
    {/* <Parallax speed={-20}>
            <img className='' src={Cloud1} alt='' />
        </Parallax> */}
  </section>
);

export default Skills;
