import React, {Component} from "react";
// import PigImgs from "../hog-imgs";

export default class Hog extends Component{

     // {
  //   name: 'Porkchop',
  //   specialty: 'Making friends',
  //   greased: true,
  //   weight: 1.6,
  //   'highest medal achieved': 'silver'
  // },
    constructor(){
        super();
        this.state = {
            isShown: false
        }
    
    }

    setShown = (event) => {
        this.setState({isShown: true})
        event.target.remove()
        // return (<div> Weight: {this.props.newHog.weight} </div>)
    }

    renderDetails = () => {
        if(this.state.isShown === true){
        return(
            <div>
                <h2>Weight: {this.props.newHog.weight}</h2>
                <h2>Specialty: {this.props.newHog.specialty}</h2>
                <h2>Greased: {`${this.props.newHog.greased}`}</h2>
            </div>
            )
        }
    }
    
    
    render(){
        // so we console.log
        // let hog = this.props.newHog

        return < div className="ui eight wide column">
             <img src={this.props.image} alt="logo" className="brand-logo"/>
            <h2>Name: {this.props.newHog.name} </h2>
            {/* <button className= "ui primary button"onClick={(event) => {this.props.renderDetails(event,this.props.newHog)}} >Detail </button> */}
            <button className= "ui primary button"onClick={this.setShown}>Detail </button>
            {this.renderDetails()}
            {/* <h2>Weight: {this.props.newHog.weight}</h2> */}
        </div>
    }

}