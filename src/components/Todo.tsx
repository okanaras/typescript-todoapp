import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  return (
    <div className="todo-wrapper">
      <div>{content}</div>
      <div>
        <IoMdRemoveCircleOutline className="todo-icons" />
        <FaRegEdit className="todo-icons" />
      </div>
    </div>
  );
}

export default Todo;
