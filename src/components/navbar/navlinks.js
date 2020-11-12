import React from 'react';
import { Link } from 'gatsby';
import './navbar.js';

class Navlinks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            css:{
                height: '64px'
            }
        }
        this.showLinks = this.showLinks.bind(this);
        this.hideLinks = this.hideLinks.bind(this);
    }

    showLinks = () => {
        this.setState ( state => ({
            css:{
                height: this.props.links.length * 64 + 'px'
            }
        }))
    }

    hideLinks = () => {
        this.setState ( state => ({
            css:{
                height: '64px'
            }
        }))
    }

    render(){


        return(
            <div>
                <div onMouseOver={this.showLinks} onMouseLeave={this.hideLinks} style={this.state.css} className="nav-links-container">
                    {this.props.links.map((string) => 
                        <Link className="nav-link" to={`/${string.toLowerCase().replace(/\s/g, '')}`} key={string}>{string}</Link>
                    )};
                </div>
            </div>
        )
    }
}

export default Navlinks