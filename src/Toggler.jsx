import React, { Component } from 'react';
import MovieList from './movies/MovieList';

export default class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state={
            buttonText:"Hide",
            show:true
        }
        this.toggle=this.toggle.bind(this);
    }
    toggle(){
        let currentState=this.state;
        currentState.show=!currentState.show;
        currentState.buttonText=currentState.show?'Hide':'show';
        this.setState(currentState)
    }
    componentDidMount()
    {
console.log('I am jaya')
    }
    componentWillUpdate(){
        console.log('component updated')
        return true;
    }
    
    render() {
        let content='';
        if(this.state.show){
            content=<MovieList search={''}/>
    //    content= <label>I am the text</label>
        }
      
        return (
         <div>
             <button className="btn btn-success" onClick={this.toggle}>{this.state.buttonText}
             </button>
             {content}
         </div>
        )
    }
}
