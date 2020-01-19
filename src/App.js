import React from "react";
import SimpleList from "./List/SimpleList";
import ComplexList from "./List/ComplexList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sample List</h1>
      <SimpleList />
      <hr />
      <ComplexList />
    </div>
  );
}

export default App;
