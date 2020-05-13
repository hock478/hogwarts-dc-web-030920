import React, { Component } from "react";

class SearchContainer extends Component {
  render() {
    console.log("Inside ")
    return (
      <div className="centered" >
        {/* <h1>Hello World</h1> */}
        <div className="ui form fluid" >
          <input type="text" placeholder="Search..." onKeyUp={this.props.changeSearch}></input>
          <select onChange={this.props.changeWeight}>
           
            <option> 0 - 2 </option>
            <option> 2 - 4 </option>
            <option> 4 - 6 </option>
          </select>
        </div>

      </div>
    );
  }
}

export default SearchContainer;

