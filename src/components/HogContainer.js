import React, { Component } from "react";
import Hog from "./Hog";
export default class HogContainer extends Component{
//hogs= [{} , {} .{} ] ==> [  < Hog  {}/>,  < Hog {}/>, < Hog {}/>, < Hog />]
// < Hog />
   



   
    render(){
        //how can we dynamically generate the filename?
      
        return (
        <div >
            <h1>Hog Lives Here</h1>
            
         <div className = "ui grid container">
            
            
             {/* after we got the hogs array from the parennt we wanna iterate throught it,
              and get the attributes inside if it that s why we put newHog= {hog} cuz each hog has all of the attributes name, weight ..*/}
            {this.props.hogs.map(  (hog, index) => 
                <Hog 
                    key = {index}  /* becuse we have no id attribute and it s an array so we use the index for the key */
                    newHog={hog} 
                    image={require(`../hog-imgs/${ hog.name.toLowerCase().split(" ").join("_") }.jpg`)}
                /> 
                                )
            } 

                
           
            
            </div>
        </div>
        ) 


    }
    
}


