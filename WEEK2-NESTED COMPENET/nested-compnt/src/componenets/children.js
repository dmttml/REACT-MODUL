import React from "react";
import Children from "./child";

export default function Childrens(props) {
    return(
        <div className="card-group">
            {props.childrens.map((childrensInfo,index) => <Children key={index} data={childrensInfo}/>)}

        </div>
    )

    
    
}