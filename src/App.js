import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css";
import { useState } from "react";
import AddForm from "./components/AddForm";


function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "Alice" },
  ]);

  function deleteStudent(id) {
    console.log(id);
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudent={setStudent}/>
        <StudentList students={students} deleteStudent={deleteStudent}/>
      </main>
    </div>
  );
}

export default App;
