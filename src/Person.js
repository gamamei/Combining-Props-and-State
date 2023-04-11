import React from "react";

function Person(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age} years old</p>
    </div>
  );
}

export default Person;