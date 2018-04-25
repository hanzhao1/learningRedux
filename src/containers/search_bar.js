import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super()

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <form className="input-group">
        <input
          value={this.state.term}
          className="form-control"
          onChange={this.onInputChange}
          placeholder="Get a five-day forecast in your favorite cities"/>
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary"
          >Submit</button>
        </span>
      </form>
    );
  }
}
