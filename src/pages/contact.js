import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Skills from '../components/skills';

import '../pageScss/contact.scss';
import StationaryButton from '../components/buttons/stationaryButton';

import GmailLogo from '../images/skills/gmail.png';
import LinkinLogo from '../images/skills/linkin.png';
import FlexShow from '../components/flexShow';
import Meta from '../components/meta';

class Contact extends React.Component{

    render(){
        return(
            <div>
                <Meta 
                    title="Contact Me"
                    desc="Contact Owen G. Bean with email owenbean400@gmail.com or with Linkedin"
                />
                <Navbar />
                <main className="contact-main">
                    <form
                    action="https://formspree.io/f/mjvpobvq"
                    method="POST"
                    >
                    <h5>Contact Me</h5>
                        <FlexShow css={{margin: '12px 0 36px 0', justifyContent: 'space-evenly'}}>
                            <Skills image={GmailLogo} altImg="Email Logo" name="Email" iconLink="mailto: owenbean400@gmail.com"/>
                            <Skills image={LinkinLogo} altImg="LinkedIn Logo" name="LinkedIn" iconLink="https://www.linkedin.com/in/owen-bean/"/>
                        </FlexShow>
                    <label>
                        Your email:
                        <input type="text" placeholder="Email Address" name="_replyto" required/>
                    </label>
                    <label>
                        Message:
                        <textarea name="message" placeholder="Enter Message Here"></textarea>
                    </label>
                    <StationaryButton title="Send Message" buttonType="submit" required/>
                    </form>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Contact