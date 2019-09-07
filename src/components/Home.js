import React, { Component } from 'react';
import home from '../assests/board.jpg';



export default class Home extends Component {

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
                <img src={home}></img>
            </div>
        )
    }
}
