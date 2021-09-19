import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    render(){
        return(
            <div>
                {/* <h2>Parent Component</h2> */}
                <Child data={{name: 'jai', age: 25}}/>
            </div>
        )
    }
}
export default Parent