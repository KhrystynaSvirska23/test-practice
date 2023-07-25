import { useState } from "react";

const TaskInput = () => {
  const [inputName, setInputName] = useState("");
  const [name, setName] = useState("");

  function validate() {
    if (inputName.length < 2) {
      alert("Name is incorrect");
      return false;
    }
    if (inputName.length > 7) {
      alert("Name is incorrect");
      return false;
    }
    console.log("yes");
    return true;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (validate()) {
            setName(inputName);
            setInputName("");
          }
          return false;
        }}
      >
        next
      </button>
      <div>{inputName ? "" : name}</div>
    </div>
  );
};
export default TaskInput;
