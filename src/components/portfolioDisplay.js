import React from 'react';


class PortfolioDisplay extends React.Component{
    constructor() {
        super();
        this.state = {
            backgroundImageSize: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 768) ? 50 : 100,
            opacity: 0,
        }
        this.changeSize = this.changeSize.bind(this);
        this.toggleInfo = this.toggleInfo.bind(this);
    }

    changeSize() {
        this.setState({
            backgroundImageSize: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 768) ? 50 : 100,
        })
    }

    toggleInfo(){
        this.setState({
            opacity: (this.state.opacity == 0.9) ? 0 : 0.9,
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.changeSize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.changeSize)
    }

    render(){
        const STYLE = {
            box1: {
                width: this.state.backgroundImageSize + '%',
                height: this.state.backgroundImageSize + 'vw',
                margin: '0',
                backgroundImage: 'url(' + "https://source.unsplash.com/random" + ')',
                backgroundPosition: 'center',
                backgroundSize: '100%',
                cursor: 'pointer',
            },
            box2: {
                width: '100%',
                height: '100%',
                opacity: this.state.opacity,
                transition: 'opacity 0.33s',
                backgroundColor: '#151035'
            },
            title: {
                textAlign: 'center',
                margin: '0',
                color: 'white',
                padding: '32px 0 0 0',
                fontSize: '24px'
            }
        }
        return(
            <div style={{...STYLE.box1}} onMouseEnter={this.toggleInfo} onMouseLeave={this.toggleInfo}>
                <div style={{...STYLE.box2}}>
                    <h5 style={{...STYLE.title}}>TITLE</h5>
                </div>
            </div>
        )
    }
}

export default PortfolioDisplay