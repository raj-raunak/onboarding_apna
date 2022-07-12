import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="App">
      <button
        className="openFormBtn"
        onClick={() => {
          setOpenForm(true);
        }}
      >
        Open
      </button>
      {openForm && <Form closeForm={setOpenForm} />}
    </div>
  );
}
export default App;
