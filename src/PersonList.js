import React, { useState } from "react";
import Person from "./Person";

function PersonList(props) {
  const { people } = props;
  const [newPerson, setNewPerson] = useState({ name: "", age: "" });

  const handleAddPerson = () => {
    const updatedPeople = [...people, newPerson];
    setNewPerson({ name: "", age: "" });
    props.onAddPerson(updatedPeople);
  };

  const handleRemovePerson = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    props.onRemovePerson(updatedPeople);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value
    }));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => handleRemovePerson(person.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={newPerson.name}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter age"
                name="age"
                value={newPerson.age}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <button onClick={handleAddPerson}>Add Person</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PersonList;