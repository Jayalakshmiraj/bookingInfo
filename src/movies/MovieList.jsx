import React, { Component } from 'react';
import MovieDetails from './MovieDetails'

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[{ "id": 1, "name": "Bahubali 2", "year": 2017, "image_url": "https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg", "production_house": "ABC Movies", "rating": 5, "type": "epic", "language": "Telugu", "date": "2017-09-30T18:30:00.000Z" }, { "id": 2, "name": "Captain Marvel", "year": 2019, "image_url": "https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg", "production_house": "Australia X", "rating": 4, "type": "fiction", "language": "English", "date": "2019-01-31T18:30:00.000Z" }, { "id": 13, "name": "aram", "year": 2018, "image_url": "https://chennai365.com/assets/Aramm-aka-Aram-photos-stills-images-25.jpg", "production_house": "surya", "rating": 4, "type": "social", "language": "tamil", "date": "2019-02-02T18:30:00.000Z" }]

        }
    }
    componentWillUnmount(){
        console.log('I am unmount')
    }
    render() {
        
        let listOfMoviesDisplayed='';
        if(this.props.search == ''){
            listOfMoviesDisplayed=this.state.movies.map((movie,index)=>{
            return <MovieDetails key={index} details={movie}/>
        })
    }
    else{
        let filterMovies=this.state.movies.filter((movie,index)=>{
            return movie.name.toLowerCase().includes(this.props.search.toLowerCase())
        });
        listOfMoviesDisplayed=filterMovies.map((movie,index)=>{
            return <MovieDetails key={index} details={movie}/>
        })
    }

        return (
            <div>
                {listOfMoviesDisplayed}
            </div>
        )
    }
}
