import React, { Component } from 'react';
import test from './../assests/testt.jpg';

export default class Clients extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            demo : this.props.image
        }

        
    }
    render() {
        return (
            <div >
                <img src={test}></img>
            </div>
        )
    }
}
