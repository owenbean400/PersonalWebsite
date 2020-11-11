import React from 'react';
import { Helmet } from 'react-helmet';

import LogoFavicon from '../images/logo/favicon.ico';

class Meta extends React.Component{

    render(){
        const TITLE = (typeof(this.props.title) != "undefined") ? this.props.title : "";
        return(
            <div>
                <Helmet>
                    <meta name="author" content="Owen G. Bean"></meta>
                    <meta name="application-name" content="Owen G. Bean Portfolio"></meta>
                    <meta name="description" content={this.props.desc}></meta>
                    <meta charset="UTF-8"></meta>
                    <title>{"Owen G. Bean " + TITLE}</title>
                    <link rel="shortcut icon" href={LogoFavicon} type="image/x-icon" />
                </Helmet>
            </div>
        )
    }
}

export default Meta