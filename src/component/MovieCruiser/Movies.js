import React, {Component} from 'react';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            activeFav : false
        }
    }

    addToFav(e) {
        e.preventDefault();
        let id = e.target.id
        id = id.substring(4, id.length);

        this.setState({
            activeFav : true
        });

        console.log(this.props.allMovies);

        let favStorage = localStorage.getItem('favStorage') ? JSON.parse(localStorage.getItem('favStorage')) : {results:[]};

        let favObj = this.props.allMovies.find(function (obj) { 
            return obj.id == id; 
        });

        let p = true;

        if (favStorage.results.length > 0){
            favStorage.results.map( item => {

                if (item.id == id){
                    p = false;
                }
            })
            if (p) {

                favStorage.results.push(favObj);
            } 
        } else {
            favStorage.results.push(favObj);
        }

        localStorage.setItem('favStorage', JSON.stringify(favStorage));
    }

    render() {
        return <div className="results">
            <div className="poster">
                <img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + this.props.movie.poster_path} />
                <a id={"fav_"+this.props.movie.id} onClick={this.addToFav.bind(this)} className={this.state.activeFav ? "fa fa-heart" : "fa fa-heart-o"}></a>
            </div>
            <div className="info">
                <h4>{this.props.movie.title}</h4>
                <span>{this.props.movie.release_date}</span>
                <p>{this.props.movie.overview && this.props.movie.overview.length > 400 ? this.props.movie.overview.substring(0,400) + '...' : this.props.movie.overview }</p>
            </div>
        </div>;
    }
}

