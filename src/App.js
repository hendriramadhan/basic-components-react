import React from "react";
import ClassComponent from "./materi/Komponen/pembahasan/ClassComponent";
import FunctionalComponent from "./materi/Komponen/pembahasan/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent nama="Hendri Ramadhan" />
      <FunctionalComponent nama="samsudin" />
    </div>
  );
}

export default App;
