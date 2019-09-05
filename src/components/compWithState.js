import React, { Component } from 'react';
import Pt from 'prop-types';

export default class compWithState extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name : this.props.name,
            age : this.props.age,
            profession : this.props.profession,
            expo : this.props.expo

        }
    }

    handleClick = (e) => {
        
        e.preventDefault();// to stop the behaviour of any event
        this.setState({name : "rockstar"});
        console.log(`${this.state.name} clicked the button`);
        
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.name}{this.props.children}</h1>
                <h2>My age is {this.state.age}</h2>
                <h3>I am a professional {this.state.profession}</h3>
                <h4>Having Experience of {this.state.expo} years</h4>
                <a href="https://www.google.com" onClick={this.handleClick}>click me</a>
            </div>
        )
    }
}

compWithState.propTypes = {
    name : Pt.string.isRequired,
    age : Pt.number,
    profession : Pt.string,
    expo : Pt.number

};

compWithState.defaultProps = {
    name : "Rajat"
}
