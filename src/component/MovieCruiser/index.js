import React, {Component,Fragment} from 'react';
import Loader from './Loader';
import Header from './Header';
import SearchResults from './SearchResults';

export default class MovieCruiser extends Component {
    constructor() {
        super();
    
        this.state = {
            movies : localStorage.getItem('favStorage') ? JSON.parse(localStorage.getItem('favStorage')) : {results:[]}
        }
    }

    searchMovies(searchText) {

        const api_key = '34040066e6feb3d52b20a96fa31440af';
        fetch("https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&include_adult=false&query=" + searchText, { method: 'GET'})
        .then(res => res.json())
        .then( response => {
            this.setState({
                movies : response
            }) ;
        });        
    }

    render() {
        return <Fragment>
                <Loader />
                <Header onSearch={this.searchMovies.bind(this)}/>
                <SearchResults movies={this.state.movies.results} />
            </Fragment>
    }
}