import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Label from './Label';
// import Image from './Image'
// import Price from './Price'
// import Desc from './Desc'
// import Add from './Add'
// import Remove from './Remove'
// import TextBox from './TextBox'
// import Product from './Product'
import Search from './Search'
import MovieList from './movies/MovieList';
import Toggler from './Toggler';
import Register from './Register/Register.jsx';

class App extends Component {
  constructor(props) {
    super();
    this.state={
     
      searchQuery:""
     
    };
    this.handleSearchClick=this.handleSearchClick.bind(this)
   this.handleChange=this.handleChange.bind(this)
  }
  handleSearchClick(data){
    console.log(data)
    let currentState=this.state;
    currentState.counter++;
    this.setState(currentState)
        }
        handleChange(data){
        
          let currentState=this.state;
          currentState.searchQuery=data;
          this.setState(currentState)
              }
  render() {

    return (
      <div className="container">
      <Register/>
      
{/* 
        <h1 className="deepika"> Hello React js</h1> */}
        {/* <h4> Movies Ticket Booking</h4> */}
        
        
        {/* <Search  Search={this.handleSearchClick} SearchText={this.handleChange}/>
        <label className="badge">{this.state.counter}</label> */}
       {/* <label className="badge">{this.state.counter}</label>

       
   
        <Image src="http://aguidetoanaheim.com/wp-content/uploads/2014/09/Anaheim-Shopping-Near-Disneyland-e1410736366369.jpg"></Image>
       
        <Price myprice="Price=100"></Price>
        <Desc mydesc="Description"></Desc>
        <Add mybutton="AddButton"></Add>
        <Remove remove="Remove"></Remove>
        <Product/> */}
        {/* <MovieList  search={this.state.searchQuery}/>
        <Toggler/> */}
      </div>

    );
  }
}

export default App;
