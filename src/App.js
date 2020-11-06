import React, { useState } from "react";
import "./App.css";
import SubjectForm from "./components/SubjectForm";
import VideoList from "./components/VideoList";

function App() {
  const [topic, setTopic] = useState(null);

  return (
    <div>
      <header>
        <h1>Learn Anything</h1>
      </header>
      <SubjectForm setTopic={setTopic} />
      {topic && <VideoList topic={topic} />}
    </div>
  );
}

export default App;
