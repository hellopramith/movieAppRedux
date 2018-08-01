import React, {Component} from 'react';

import Movies from './Movies';

export default class SearchResults extends Component {
    render() {
        return <section className="content">
            <div className="search_results">
                <div className="results-wrapper" id="results-wrapper">
                    {this.props.movies.map(m => <Movies key={m.id} allMovies={this.props.movies} movie={m} /> )}
                </div>
            </div>
        </section>
        ;
    }
}