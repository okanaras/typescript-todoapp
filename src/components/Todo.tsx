import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function Todo() {
  return (
    <div className="todo-wrapper">
      <div>First Todo</div>
      <div>
        <IoMdRemoveCircleOutline className="todo-icons" />
        <FaRegEdit className="todo-icons" />
      </div>
    </div>
  );
}

export default Todo;
