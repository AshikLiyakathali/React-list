import React from "react";
import AddItemList from "./List/AddItemList";
import UpdateItemList from "./List/UpdateItemList";
import RemoveItemList from "./List/RemoveItemList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Changing List</h1>
      <AddItemList />
      <UpdateItemList />
      <RemoveItemList />
    </div>
  );
}

export default App;
