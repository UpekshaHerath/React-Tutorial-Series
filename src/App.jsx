import "./App.css";
import { studentData } from "./data/studentData";

function StudentListItem({ name }) {
  return <li>{name}</li>;
}

const App = () => {
  return (
    <section>
      <h1>Student List</h1>
      <ul>
        {studentData.map((student) => {
          return <StudentListItem key={student.id} name={student.name} />;
        })}
      </ul>
    </section>
  );
}

export default App;
