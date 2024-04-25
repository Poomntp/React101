import "./item.css";

export default function Item(props) {
    const { data, deleteStudent } = props;
  return (
    <>
      <li key={data.id} className={data.gender}>
        <p>
          {data.id} - {data.name}
        </p>
        <p>{data.gender}</p>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          delete
        </button>
      </li>
    </>
  );
}
