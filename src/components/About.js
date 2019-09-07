import React, { Component } from 'react'
import test from './../assests/testing.jpg';

export default class About extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            demo : this.props.image
        }

        
    }
    render() {
        return (
          <div>
             <img src={test} onClick = {() => this.props.image(80)}></img>
             
          </div>
        )
    }
}


