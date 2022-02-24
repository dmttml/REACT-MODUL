import React from "react";
import Friend from "./friend";

export default function Friends(props) {
    return(
        <div className="card-group">
            {props.friends.map((friendsInfo,index) => <Friend key={index} data={friendsInfo}/>)}

        </div>
    )

    
    
}