import React from 'react';

class SchoolCard extends React.Component{

    render(){
        const STYLE = {
            container: {
                width: '200px',
                backgroundColor: 'whitesmoke',
                borderRadius: '8px',
                padding: '8px',
                height: 'auto'
            },
            headerContainer: {
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            schoolName:{
                fontSize: '24px',
                margin: '0',
            },
            logo: {
                height: '32px',
                backgroundColor: 'black'
            },
            major: {

            },
            gpa: {

            },
            link: {
                fontSize: '12px',
                cursor: 'pointer',
                textDecoration: 'none',
            },
            accomp: {
                padding: '0 0 0 16px',
                listStyleType: 'circle',
            },
            accomps: {
                padding: '0 0 0 0',
            }
        }

        const Accomplishments = this.props.accomplishments.map((accomp) => 
            <li key={accomp} style={STYLE.accomps}>{accomp}</li>
        );

        return(
            <div style={STYLE.container}>
                <div style={STYLE.headerContainer}>
                    <h6 style={STYLE.schoolName}>{this.props.schoolName}</h6>
                    <img style={STYLE.logo} src={this.props.image} alt={this.props.imageAlt}/>
                </div>
                <p>{this.props.major}</p>
                <p>GPA: {this.props.gpa}</p>
                <ul style={STYLE.accomp}>
                    {Accomplishments}
                </ul>
                <a href={this.props.link} target="_blank" style={STYLE.link}>School Link</a>
            </div>
        )
    }
}

export default SchoolCard