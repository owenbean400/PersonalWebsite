import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Section from '../components/section';
import SkillBar from '../components/skillbar';
import Meta from '../components/meta';
import Skills from '../components/skills';
import FlexShow from '../components/flexShow';

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

import GmailLogo from '../images/skills/gmail.png';
import LinkinLogo from '../images/skills/linkin.png';
import FreeCodeCampLogo from '../images/skills/freecodecamp.jpg';
import GithubLogo from '../images/skills/github.png';

import '../pageScss/about.scss';
import SchoolCard from '../components/schoolCard';
import StationaryButton from '../components/buttons/stationaryButton';

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
                            <h1> About Owen Bean</h1>
                            <div>{/*buttons */}</div>
                            <p className="about-info">I am a front end web developer from Maine. I specialize with the React JS framework to create
                                ui and implement these ui in website development. I have developed my own UI and wireframe design
                                and from a prototype. Addtionally, I done Graphic Design for several at CATC, and understand
                                graphic design fundaments. Feel free to <Link to="/contact">contact</Link> me if you want a front end website to be developed
                                or to chat.
                            </p>
                            <StationaryButton title="Contact" link="/contact"/>
                        </div>
                        <OwenBeanImage />
                    </div>
                    <Section header="Skills">
                        <div className="skills-container">
                            <SkillBar barWidthPercent="70" header="HTML" image={HTMLLogo}/>
                            <SkillBar barWidthPercent="95" header="CSS" image={CSSLogo}/>
                            <SkillBar barWidthPercent="60" header="Javascript" image={JSLogo}/>
                            <SkillBar barWidthPercent="70" header="React JS" image={ReactLogo}/>
                            <SkillBar barWidthPercent="70" header="Photoshop"image={PhotoshopLogo}/>
                            <SkillBar barWidthPercent="70" header="Illustrator" image={IllustartorLogo}/>
                        </div>
                    </Section>
                    <Section header="Resume">
                        <div>
                            <iframe className="resume" src={Resume} title="Owen Bean Resume"></iframe>
                        </div>
                    </Section>
                    <Section header="Education">
                        <div className="education-container">
                            <SchoolCard schoolName="SMCC" major="Computer Science Degree" gpa="3.92" accomplishments={["Honors"]} link="https://www.smccme.edu/" image={SMCCLogo} imageAlt="SMCC Logo"/>
                            <SchoolCard schoolName="FreeCodeCamp" major="Online Front End Learning" gpa="Completed 2 modules" accomplishments={["2 Certificates"]} link="https://www.freecodecamp.org/fcc43fc8b50-7ee6-4f9d-893a-0c40a5d7f4fe" image={FreeCodeCampLogo} imageAlt="FreeCodeCamp Logo"/>
                            <SchoolCard schoolName="CATC" major="Graphic Design" gpa="98" accomplishments={["NTHS"]} link="http://capitalarea.mainecte.org/" image={CATCLogo} imageAlt="CATC Logo"/>
                            <SchoolCard schoolName="Hall-Dale" major="High School Diploma" gpa="3.82" accomplishments={["Summa Cum Laude"]} link="https://www.kidsrsu.org/o/hdmhs" image={HalldaleLogo} imageAlt="Hall-Dale Logo"/>
                        </div>
                    </Section>
                    <Section header="Contact" actionName="Contact Me" link="/contact">
                        <FlexShow css={{margin: '12px 0 36px 0', justifyContent: 'space-evenly'}}>
                            <Skills image={GmailLogo} altImg="Email Logo" name="Email" iconLink="mailto: owenbean400@gmail.com"/>
                            <Skills image={LinkinLogo} altImg="LinkedIn Logo" name="LinkedIn" iconLink="https://www.linkedin.com/in/owen-bean/"/>
                            <Skills image={GithubLogo} altImg="Github Logo" name="GitHub" iconLink="https://github.com/owenbean400"/>
                            <Skills image={FreeCodeCampLogo} altImg="FreeCodeCamp Logo" name="FreeCodeCamp" iconLink="https://www.freecodecamp.org/fcc43fc8b50-7ee6-4f9d-893a-0c40a5d7f4fe"/>
                        </FlexShow>
                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default About