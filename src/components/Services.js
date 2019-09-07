import React, { Component } from 'react'
import test from './../assests/test.jpg';

export default class Services extends Component {

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
 