import { useState, useRef } from "react";
import uuid from "react-uuid";
import Item from "./Item";
import "./list.css";

function Todo() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const inputRef = useRef("");

  const submitFunc = (evt) => {
    evt.preventDefault();
    let obj = {
      id: uuid(),
      text: inputRef.current.value,
      isComplete: false,
    };
    setTodo([...todo, obj]);
    inputRef.current.value = "";
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const deleteFunc = (evt) => {
    let deleteTodo = todo.filter((item) => item.id !== evt);
    setTodo(deleteTodo);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const editFunc = (evt) => {
    let editTodo = todo.find((item) => item.id === evt);
    let elPrompt = prompt(" ", editTodo.text);
    editTodo.text = elPrompt;
    setTodo([...todo]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const checkedFunc = (evt) => {
    let checkedTodo = todo.find((item) => item.id === evt);
    checkedTodo.isComplete = !checkedTodo.isComplete;
    setTodo([...todo]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  return (
    <>
      <form className="w-50 mx-auto my-5 d-flex" onSubmit={submitFunc}>
        <input
          ref={inputRef}
          className="form-control"
          type="text"
          placeholder="Enter your text"
        />
        <button className="btn btn-success ms-2">Create</button>
      </form>
      <ul className="list">
        <Item
          data={todo}
          deleteFunc={deleteFunc}
          editFunc={editFunc}
          checkedFunc={checkedFunc}
        />
      </ul>
    </>
  );
}

export default Todo;
