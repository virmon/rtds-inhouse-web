import React, { Component } from 'react';
// import axios from 'axios';
// import { Input } from 'antd';
// import SearchItem from './SearchItem';
import './SearchBox.css';
// const Search = Input.Search;

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      products: [],
      display: 'close'
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  // get data from REST API
  // componentWillMount() {
  //   axios.get('https://pure-harbor-18418.herokuapp.com/products').then(response =>{
  //       // console.log(response.data);
  //       this.setState({
  //         products: response.data
  //       })
  //   })
  // }

  // updates search for every keypress
  handleSearch(event) {
    // console.log(event.target.value);
    this.setState({
      search: event.target.value
    })
  }

  render() {
    // filter search results
    // let filteredResults = this.state.products.filter((product) => {
    //   var found = product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //   return found;
    // });
    return(
      <div>
        <input type='text' 
          className='search-filter'
          id='search-filter'
          placeholder="Filter Search Item"
          onKeyUp={this.props.triggerSearch}
          onChange={this.props.triggerSearch}
        />
        {/* <Search
          placeholder="Search Item"
          onKeyUp={this.handleSearch}
          onChange={this.handleSearch}
          onKeyDown={() => this.setState({ display: 'open' })}
          onBlur={() => this.setState({ display: 'close' })}
        />
        <SearchItem results={filteredResults} autocomplete={this.state.display}/> */}
      </div>
    );
  }
};

export default SearchBox;
