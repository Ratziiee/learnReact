import React, { Component } from 'react'
import Pt from 'prop-types';

 class Students extends Component {

    render() {
        return (
            <div className = "studentDiv">
                <h1>Hello {this.props.name}{this.props.children}</h1>
                <h2>My age is {this.props.age}</h2>
                <h3>I am a professional {this.props.profession}</h3>
                <h4>Having Experience of {this.props.expo} years</h4>
            </div>
        )
    }
}

Students.propTypes = {
    name : Pt.string.isRequired,
    age : Pt.number,
    profession : Pt.string,
    expo : Pt.number

};

Students.defaultProps = {
    name : "Rajat"
}

export default Students;
