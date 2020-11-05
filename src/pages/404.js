import React from 'react';
import Navbar from '../components/navbar/navbar.js';
import Footer from '../components/footer/footer.js';

const STYLE = {
    main: {
        marginTop: '100px',
        textAlign: 'center',
        fontSize: '36px',
        height: '50vh',
    }
}

class NotFoundPage extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <main style={STYLE.main}>
                    Sorry this web page url doesn't work. <br/>
                    This webpage is under construction
                </main>
                <Footer />
            </div>
        )
    }
}

export default NotFoundPage