import React from "react";
import SimpleList from "./List/SimpleList";
import ComplexList from "./List/ComplexList";
import NestedList from "./List/NestedList";
import UpdateList from "./List/UpdateList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sample List</h1>
      <SimpleList />
      <hr />
      <ComplexList />
      <hr />
      <NestedList />
      <hr />
      <UpdateList />
    </div>
  );
}

export default App;
