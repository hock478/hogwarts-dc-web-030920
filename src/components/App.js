import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import SearchContainer from "./SearchContainer";
import HogContainer from "./HogContainer";

class App extends Component {

  // {
  //   name: 'Porkchop',
  //   specialty: 'Making friends',
  //   greased: true,
  //   weight: 1.6,
  //   'highest medal achieved': 'silver'
  // },
  
  constructor(){
    super()
    this.state = {

      arr: hogs,
      filtered: hogs
    }
  }

  // Need a call back function for SearchContainer
  
  // -------- selection -------
  // when selecting change the DOM to reflect the selected option
  // that changes the data depending on the selected option based on weight
  // iterate over the array then filter the object with weight the same as the select value
 
  // 0 - 0.2 , 0.2 - 0.4 , 0.4 -0.6 

  weightSelector = (event) => {
    let value = event.target.value
    let cloneArr;
    // filter the cloneArr
    if(value === "0 - 2"){
      // filter it by weight( 0 - 0.2)
      cloneArr = this.state.arr.filter(hog => hog.weight >= 0 && hog.weight <= 2)
      this.setState({filtered: cloneArr})
    }else if(value === "2 - 4"){
      cloneArr = this.state.arr.filter(hog => hog.weight > 2 && hog.weight <= 4)
      this.setState({filtered: cloneArr})
    }else{
      cloneArr = this.state.arr.filter(hog => hog.weight > 4)
      this.setState({filtered: cloneArr})
    }
    console.log(cloneArr) 
  }

  searchSelect = (event) => {
    const byName = this.state.arr.filter(hog => hog.name.includes(event.target.value))
    console.log(byName)
    this.setState({filtered: byName})
  }
 
  render() {
    return (
      <div className="App">
        <Nav />
        <SearchContainer changeWeight={this.weightSelector} changeSearch={this.searchSelect}/>
        <HogContainer hogs={this.state.filtered}/>
      </div>
    )
  }
}

export default App;
