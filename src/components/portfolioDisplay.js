import React from 'react';


class PortfolioDisplay extends React.Component{
    constructor() {
        super();
        this.state = {
            backgroundImageSize: 0,
            opacity: 0,
        }
        this.changeSize = this.changeSize.bind(this);
        this.toggleOn = this.toggleOn.bind(this);
        this.toggleOff = this.toggleOff.bind(this);
    }

    changeSize() {
        this.setState({
            backgroundImageSize: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 768) ? 50 : 100,
        })
    }

    toggleOn(){
        this.setState({
            opacity: 0.95,
        })
    }

    toggleOff(){
        this.setState({
            opacity: 0,
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.changeSize)
        this.changeSize();
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
                backgroundImage: 'url(' + this.props.image + ')',
                backgroundPosition: 'center',
                backgroundSize: '102%',
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
            <div style={{...STYLE.box1}} onMouseOver={this.toggleOn} onMouseLeave={this.toggleOff}>
                <div style={{...STYLE.box2}}>
                <h5 style={{...STYLE.title}}>{this.props.title}</h5>
                {this.props.children}
                </div>
            </div>
        )
    }
}

export default PortfolioDisplay