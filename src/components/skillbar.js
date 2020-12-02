import React from 'react';

class SkillBar extends React.Component{
    constructor() {
        super();
        this.state = {
            hovering: false,
        }
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleHover(){
        this.setState({
            hovering: true,
        })
    }

    handleLeave(){
        this.setState({
            hovering: false,
        })
    }

    render(){
        const STYLE = {
            skillContainer: {
                backgroundColor: 'whitesmoke',
                width: '300px',
                borderRadius: '8px',
                padding: '12px',
                boxShadow: 'inset 12px 12px 30px #ddd, inset -12px -12px 30px 2px white'
            },
            skillBarContainer: {
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                justifyContent: 'space-between'
            },
            barContainer: {
                backgroundColor: '#151035',
                width: '240px',
                height: '32px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'inset -6px -6px 30px 2px #2d2561'
            },
            barInContainer: {
                backgroundColor: '#593ed6',
                width: this.props.barWidthPercent + '%',
                height: '32px',
                color: 'white',
                borderRadius: '16px 0 0 16px',
                boxShadow: 'inset 0 -6px 30px 2px #705ad6'
            },
            header: {
                fontSize: '18px',
                margin: '0 0 8px 0',
            },
            percentText: {
                margin: '0',
                padding: '6px 0 0 12px',
                opacity: (this.state.hovering) ? '1' : '0',
                transition: 'opacity .33s'
            },
            logo: {
                height: '32px',
                width: 'auto',
            }
        }
        return(
            <div style={STYLE.skillContainer} onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                <h6 style={STYLE.header}>{this.props.header}</h6>
                <div style={STYLE.skillBarContainer}>
                    <img style={STYLE.logo} src={this.props.image} alt={this.props.imageAlt}/>
                    <div style={STYLE.barContainer}>
                        <div style={STYLE.barInContainer}>
                            <p style={STYLE.percentText}>{this.props.barWidthPercent + '%'}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillBar