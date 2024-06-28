import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodoById } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemovoTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id,
      content: newTodo,
    };
    dispatch(updateTodoById(payload));
    setEditable(!editable);
  };

  return (
    <div className="todo-wrapper">
      {editable ? (
        <input
          type="text"
          style={{
            width: "400px",
            border: "none",
            borderBottom: "1px solid #bebebe",
            outline: "none",
          }}
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <IoMdRemoveCircleOutline
          className="todo-icons"
          onClick={handleRemovoTodo}
        />
        {editable ? (
          <FaCheck className="todo-icons" onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit
            className="todo-icons"
            onClick={() => setEditable(!editable)}
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
