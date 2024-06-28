import React from "react";

function TodoCreate() {
  return (
    <div className="todo-create">
      <input type="text" className="todo-input" placeholder="Todo giriniz..." />
      <button className="todo-create-button">Olustur</button>
    </div>
  );
}

export default TodoCreate;
