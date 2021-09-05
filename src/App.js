import "./styles.css";
import ToDoList from "./containers/ToDoList";
import AddToDo from "./containers/AddToDo";
import Footer from "./containers/Footer";
export default function App() {
  return (
    <div className="App">
      <h1> Mentorzy IT</h1>
      <h2>Pierwszy projekt - REDUX</h2>
      <AddToDo />
      <ToDoList />
      <Footer />
    </div>
  );
}
