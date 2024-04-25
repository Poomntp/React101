import "./AddForm.css";
import { useState } from "react";

export default function AddForm(props) {
    const { students, setStudent } = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  function saveStudent(e) {
    e.preventDefault();
    if (!name) {
      alert("Please enter student name");
      return;
    } else {
      const newStudent = {
        id: Math.floor(Math.random()*1000),
        name: name,
        gender: gender
      };
      console.log(newStudent);
      setStudent([...students, newStudent]);
      setName("");
    }
  }
  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>Student Name :</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e)=> setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    </section>
  );
}
