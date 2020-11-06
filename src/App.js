import React, { useState } from "react";
import "./App.css";
import SubjectForm from "./components/SubjectForm";

function App() {
  const [topic, setTopic] = useState(null);

  return (
    <div>
      <header>
        <h1>Learn Anything</h1>
      </header>
      <SubjectForm setTopic={setTopic} />
    </div>
  );
}

export default App;
