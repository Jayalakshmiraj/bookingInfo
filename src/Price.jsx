import React, { Component } from 'react';

export default class Price extends Component {
    constructor(props) {
        super();
    }
    render() {

        return (
           <div>
                 <label>{this.props.myprice}</label>            </div>
        )
    }
}
