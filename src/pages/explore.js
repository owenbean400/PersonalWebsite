import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import Section from '../components/section';
import FlexShow from '../components/flexShow';

import BBGame from '../images/games/bbGame.jpg';

const STYLE = {
    main: {
        margin: '48px 0 64px 0',
    }
}

class Explore extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <main style={STYLE.main}>
                    <Section header="JS Web Games" actionName="Play Games" link="/games">
                        <FlexShow>
                            <img src={BBGame} width="320px"/>
                        </FlexShow>
                    </Section>
                    <Section header="Blog Posts" actionName="More Blogs" link="/blog">

                    </Section>
                    <Section header="React Components" actionName="View More" link="/reactui">

                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Explore