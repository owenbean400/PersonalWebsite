import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Section from '../components/section';
import FlexShow from '../components/flexShow';
import PortfolioDisplay from '../components/portfolioDisplay';
import PortfolioButton from '../components/portfolioButtonContain';
import StationaryButton from '../components/buttons/stationaryButton';

import BBGame from '../images/games/bbGame.jpg';
import RPSGame from '../images/games/rps.JPG';
import Meta from '../components/meta';

class Game extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <Meta 
                    title="Games"
                    desc="Play Owen G. Bean Games that he created and built with Javascript"
                />
                <main>
                    <Section header="Games">
                        <FlexShow>
                            <PortfolioDisplay image={BBGame}>
                                <PortfolioButton>
                                    <StationaryButton title="Play" link="https://owenbean400.github.io/3dworld/" isNewTab={true}/>
                                    <StationaryButton title="Github Code" link="https://github.com/owenbean400/3dworld" isNewTab={true}/>
                                </PortfolioButton>
                            </PortfolioDisplay>
                            <PortfolioDisplay image={RPSGame}>
                                <PortfolioButton>
                                    <StationaryButton title="Play" link="https://owenbean400.github.io/rockscissorpaper/" isNewTab={true}/>
                                    <StationaryButton title="Github Code" link="https://github.com/owenbean400/rockscissorpaper" isNewTab={true}/>
                                </PortfolioButton>
                            </PortfolioDisplay>
                        </FlexShow>
                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Game