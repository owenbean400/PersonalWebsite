import React from 'react';

class Button extends React.Component{
    constructor() {
        super();
        this.state = {
            hovering: false,
        }
        this.hover = this.hover.bind(this);
        this.leave = this.leave.bind(this);
    }

    hover(){
        this.setState({
            hovering: true,
        })
    }

    leave(){
        this.setState({
            hovering: false,
        })
    }

    render(){
        const STYLE = {
            container:{
                width: '210px',
                height: '60px'
            },
            a:{
                width: '210px',
                height: '60px',
            },
            button: {
                width: '200px',
                height: '60px',
                backgroundColor: 'rgba(0,0,0,0)',
                color: (this.state.hovering || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) ? 'white' : '#151035',
                border: '0',
                transition: 'color 0.5s',
                cursor: 'pointer',
                fontSize: '18px'
            },
            circle: {
                width: (this.state.hovering || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) ? '230px' : '60px',
                height: '60px',
                backgroundColor: '#20135c',
                borderRadius: '70px',
                position: 'relative',
                bottom: '60px',
                left: '-30px',
                transition: 'left 0.5s, width 0.5s',
                zIndex: '-1',
            }
        }
        return(
            <div style={STYLE.container}>
                <a style={STYLE.a}>
                    <button style={STYLE.button} onMouseOver={this.hover} onMouseLeave={this.leave}>{this.props.title}</button>
                    <div style={STYLE.circle}></div>
                </a>
            </div>
        )
    }
}

export default Button