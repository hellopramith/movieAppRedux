import React, {Component} from 'react';

export default class SearchArea extends Component {
    constructor() {
        super();

        this.state = {
            searchText: ''
        }
    }

    handleSearchChange(e) {
        const searchText = e.target.value;
        this.setState({
            searchText
        })
    }

    handleSearch(e) {
        e.preventDefault();
        this.props.onSearch(this.state.searchText)
    }

    render() {
        return <form onSubmit={this.handleSearch.bind(this)}>
            <input className="form-control" 
                type="text" 
                value={this.state.searchText} 
                onChange={this.handleSearchChange.bind(this)}
                placeholder="Search Movies" id="search" />
        </form>;
    }
}