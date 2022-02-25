import React from "react";
import Child from "./child"

const Children = (props) => {

    return (
        <div>
        {
            props.children.map((childrenInfo,index) => <Child key={index} data={childrenInfo} />)
        }
        </div>
    )

};
export default Children