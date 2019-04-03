import React, { Component } from 'react';

export default class Add extends Component {
    constructor(props) {
        super();
    }
    render() {

        return (
         <div>
             <button onClick={this.props.addButton} >Add</button>
         </div>
        )
    }
}
