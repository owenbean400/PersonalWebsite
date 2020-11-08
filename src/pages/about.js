import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Section from '../components/section';
import SkillBar from '../components/skillbar';

import OwenBean from '../images/owenbean.png';

import HTMLLogo from '../images/skills/HTML5_Logo.png';
import CSSLogo from '../images/skills/CSS3_logo.png';
import JSLogo from '../images/skills/js.png';
import ReactLogo from '../images/skills/react.png';
import PhotoshopLogo from '../images/skills/photoshop_logo.png';
import IllustartorLogo from '../images/skills/illustartor_logo.png'

import Resume from '../images/resume/owen_bean_resume.pdf';


import '../pageScss/about.scss';

const STYLE = {
    main: {
        margin: '96px 0',
    }
}

class About extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <main style={STYLE.main}>
                    <div className="about-container">
                        <div>
                            <h1> About Me</h1>
                            <div>{/*buttons */}</div>
                            <p>Frisottent evidemment au atteignait le me ah. Cinq sous seul toi mes mal. Hauteur portent est marches attache moi car donjons plateau. Falloir aux menions net courent nul dut charges capotes petites. Au un labeur boules jardin avance. Admiration fraternite permission car mes electrique decharnees. Wagons puisqu police ici non usines. Tout un pres cent je elle cree et pour ah. Ii il va contemple poussiere tiendrons la. Ca depourvus soufflent du deroulent. </p>
                        </div>
                        <img className="header-img" src={OwenBean} alt="Owen G. Bean" />
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
                            <iframe className="resume" src={Resume}></iframe>
                        </div>
                    </Section>
                    <Section header="Education">
                        <p className="hobby-container">Frisottent evidemment au atteignait le me ah. Cinq sous seul toi mes mal. Hauteur portent est marches attache moi car donjons plateau. Falloir aux menions net courent nul dut charges capotes petites. Au un labeur boules jardin avance. Admiration fraternite permission car mes electrique decharnees. Wagons puisqu police ici non usines. Tout un pres cent je elle cree et pour ah. Ii il va contemple poussiere tiendrons la. Ca depourvus soufflent du deroulent. </p>
                    </Section>
                    <Section header="Hobbies">
                        <p className="hobby-container">Frisottent evidemment au atteignait le me ah. Cinq sous seul toi mes mal. Hauteur portent est marches attache moi car donjons plateau. Falloir aux menions net courent nul dut charges capotes petites. Au un labeur boules jardin avance. Admiration fraternite permission car mes electrique decharnees. Wagons puisqu police ici non usines. Tout un pres cent je elle cree et pour ah. Ii il va contemple poussiere tiendrons la. Ca depourvus soufflent du deroulent.</p>
                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default About