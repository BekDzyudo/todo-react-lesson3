import React from "react";
import "./item.css";
export default function Item({ data, deleteFunc, editFunc, checkedFunc }) {
  return (
    <>
      {data.map((item) => {
        return (
          <li key={item.id} className="item w-50 mx-auto">
            <div className="checkText">
              <input
                type="checkbox"
                checked={item.isComplete}
                onClick={() => checkedFunc(item.id)}
              />
              <h3>{item.isComplete ? <del>{item.text}</del> : item.text}</h3>
            </div>
            <div className="btnShow">
              <button className="editBtn" onClick={() => editFunc(item.id)}>
                Edit
              </button>
              <button className="deleteBtn" onClick={() => deleteFunc(item.id)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
}
