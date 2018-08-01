import React, {Component} from 'react';
import SearchArea from './SearchArea';

export default class Header extends Component {
    render() {
        return <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">My Movie DB</a>
                    <nav className="nav">
                        <a className="nav-link" id="fav-link" href="#">Favorite list</a>
                    </nav>
                </div>
                <SearchArea onSearch={this.props.onSearch} />
            </div>
        </nav>;
    }
}