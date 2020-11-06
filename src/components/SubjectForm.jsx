import React, { useRef } from "react";

const SubjectForm = ({ setTopic }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTopic(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef}></input>
      <button type="submit">Find</button>
    </form>
  );
};

export default SubjectForm;
