import React from "react";
import Person from "./Person";
import Children from "./Children";
import Friends from "./Friends";

import data from "./data/Jdata.json";

export default function PersonList(props) {
const person=props.data
  return (
    <div className="container">
      <div className="row border ">
        <div className="col-3">
          <div className="bg-danger text-white">PERSON</div>
            <Person person= {person}/>
        </div>
        <div className="col-9">
          <div className="bg-danger text-white">CHILDREN ({person.children.length}) </div>
            <Children children={person.children} />
          <div className="bg-danger text-white">FRIENDS ({person.friends.length})</div>
            <Friends friends={person.friends} />
        </div>
      </div>
    </div>
  );
}
