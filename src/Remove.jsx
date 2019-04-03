import React, { Component } from 'react';

export default class Remove extends Component {
    constructor(props) {
        super();
    }
    render() {

        return (
           <div>
               <button onClick={this.props.Remove}>Remove</button>
           </div>
        )
    }
}
