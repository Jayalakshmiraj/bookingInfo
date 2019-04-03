import React, { Component } from 'react';

export default class Image extends Component {
    constructor(props) {
        super();
    }
    render() {

        return (
           <div>
               <img src={this.props.src}></img>
           </div>
        )
    }
}
