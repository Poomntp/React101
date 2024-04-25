
import "./StudentList.css";
import Item from "./item";
import { useState } from "react";

export default function StudentList(props) {
  const [show, setShow] = useState(true);
    const { students, deleteStudent } = props;

  return (
    <>
      <ul>
        <div className="header">
          <h1>Number of students : {students.length}</h1>
          <button onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </button>
        </div>
        {show && students.map((data) => <Item key={data.id} data={data} deleteStudent={deleteStudent} />)}
      </ul>
    </>
  );
}
