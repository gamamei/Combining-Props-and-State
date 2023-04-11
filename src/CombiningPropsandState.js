import React, { useState } from "react";
import PersonList from "./PersonList";

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: "Loren", age: 21 },
    { id: 2, name: "Xaveira", age: 22 },
    { id: 3, name: "Ruby", age: 23 },
    { id: 4, name: "Jihanne", age: 21 }
  ]);

  const handleAddPerson = (updatedPeople) => {
    setPeople(updatedPeople);
  };

  const handleRemovePerson = (updatedPeople) => {
    setPeople(updatedPeople);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
      <div>
        <h2>People List</h2>
        <PersonList people={people} onAddPerson={handleAddPerson} onRemovePerson={handleRemovePerson} />
      </div>
    </div>
  );
}

export default App;