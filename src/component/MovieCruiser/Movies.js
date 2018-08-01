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
        this.setState({
            activeFav : true
        });

        console.log(this.props.allMovies);

        // var favObj = data.results.find(function (obj) { 
        //     return obj.id == e.target.id; 
        // });

        // let e = true;

        // if (self.favStorage.results.length > 0){
        //     self.favStorage.results.map( item => {

        //         if (item.id == id){
        //             e = false;
        //         }
        //     })
        //     if (e) {

        //         self.favStorage.results.push(favObj);
        //     } 
        // } else {
        //     self.favStorage.results.push(favObj);
        // }


        // localStorage.setItem('favStorage', favStorage);
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

