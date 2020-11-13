import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Section from '../components/section';
import SkillBar from '../components/skillbar';
import Meta from '../components/meta';

import HTMLLogo from '../images/skills/HTML5_Logo.png';
import CSSLogo from '../images/skills/CSS3_logo.png';
import JSLogo from '../images/skills/js.png';
import ReactLogo from '../images/skills/react.png';
import PhotoshopLogo from '../images/skills/photoshop_logo.png';
import IllustartorLogo from '../images/skills/illustartor_logo.png';

import HalldaleLogo from '../images/schools/halldale.png';
import CATCLogo from '../images/schools/catc.png';
import SMCCLogo from '../images/schools/smcc.png';

import Resume from '../images/resume/owen_bean_resume.pdf';
import OwenBeanImage from '../components/imageFixed/owenBeanImage';


import '../pageScss/about.scss';
import SchoolCard from '../components/schoolCard';

const STYLE = {
    main: {
        margin: '96px 0',
    }
}

class About extends React.Component{

    render(){
        return(
            <div>
                <Meta 
                    title="About Me"
                    desc="Owen G. Bean is a front end web developer from Maine. Owen specialize with the React JS framework to create
                                ui and implement these ui in website development. He have developed my own UI and wireframe design
                                and from a prototype. Addtionally, Owen Bean has done Graphic Design for several at CATC, and understand
                                graphic design fundaments."
                />
                <Navbar />
                <main style={STYLE.main}>
                    <div className="about-container">
                        <div>
                            <h1> About Me</h1>
                            <div>{/*buttons */}</div>
                            <p className="about-info">I am a front end web developer from Maine. I specialize with the React JS framework to create
                                ui and implement these ui in website development. I have developed my own UI and wireframe design
                                and from a prototype. Addtionally, I done Graphic Design for several at CATC, and understand
                                graphic design fundaments. Feel free to <Link to="/contact">contact</Link> me if you want a front end website to be developed
                                or to chat.
                            </p>
                        </div>
                        <OwenBeanImage />
                    </div>
                    <Section header="Skills">
                        <div className="skills-container">
                            <SkillBar barWidthPercent="70" header="HTML" image={HTMLLogo}/>
                            <SkillBar barWidthPercent="90" header="CSS" image={CSSLogo}/>
                            <SkillBar barWidthPercent="40" header="Javascript" image={JSLogo}/>
                            <SkillBar barWidthPercent="50" header="React JS" image={ReactLogo}/>
                            <SkillBar barWidthPercent="90" header="Photoshop"image={PhotoshopLogo}/>
                            <SkillBar barWidthPercent="60" header="Illustrator" image={IllustartorLogo}/>
                        </div>
                    </Section>
                    <Section header="Resume">
                        <div>
                            <iframe className="resume" src={Resume} title="Owen Bean Resume"></iframe>
                        </div>
                    </Section>
                    <Section header="Education">
                        <div className="education-container">
                            <SchoolCard schoolName="CATC" major="Graphic Design" gpa="98" accomplishments={["NTHS"]} link="http://capitalarea.mainecte.org/" image={CATCLogo} imageAlt="CATC Logo"/>
                            <SchoolCard schoolName="SMCC" major="Computer Science Degree" gpa="3.92" accomplishments={["Honors"]} link="https://www.smccme.edu/" image={SMCCLogo} imageAlt="SMCC Logo"/>
                            <SchoolCard schoolName="Hall-Dale" major="High School Diploma" gpa="3.82" accomplishments={["Summa Cum Laude"]} link="https://www.kidsrsu.org/o/hdmhs" image={HalldaleLogo} imageAlt="Hall-Dale Logo"/>
                        </div>
                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default About