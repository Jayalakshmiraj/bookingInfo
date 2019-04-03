import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super();
    }
    render() {

        return (
           <div className="row">
          <input type="text" placeholder="search" onChange={(e)=>{this.props.SearchText(e.target.value);}}></input>
          <button className="btn btn-success"onClick={()=>{this.props.Search("hwy")}}>search</button>
               
               </div>
        )
    }
}
