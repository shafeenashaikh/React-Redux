import React from "react";

const Child = (props) => {

    const {data} = props
    return(
        <div>
            <h2>Child component</h2>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
        </div>
    )
}
export default Child