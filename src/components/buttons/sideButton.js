import React from 'react';
import { Link } from 'gatsby';

class SideButton extends React.Component{
    constructor() {
        super();
        this.state = {
            hovering: false,
            isPhone: false,
        }
        this.hover = this.hover.bind(this);
        this.leave = this.leave.bind(this);
        this.phoneCheck = this.phoneCheck.bind(this);
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

    phoneCheck(){
        this.setState({
            isPhone: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        })
    }

    componentDidMount(){
        this.phoneCheck();
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
                color: (this.state.hovering || this.state.isPhone) ? 'white' : '#151035',
                border: '0',
                transition: 'color 0.5s',
                cursor: 'pointer',
                fontSize: '18px',
                fontFamily: '"Nunito", sans-serif',
            },
            circle: {
                width: (this.state.hovering || this.state.isPhone) ? '230px' : '60px',
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
        if(this.props.title != null){
            return(
                <div style={STYLE.container}>
                    <Link style={STYLE.a} to={this.props.link}>
                        <button style={STYLE.button} onMouseOver={this.hover} onMouseLeave={this.leave}>{this.props.title}</button>
                        <div style={STYLE.circle}></div>
                    </Link>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}

export default SideButton