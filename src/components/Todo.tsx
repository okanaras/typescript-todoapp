import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const handleRemovoTodo = () => {
    dispatch(removeTodoById(id));
  };

  return (
    <div className="todo-wrapper">
      <div>{content}</div>
      <div>
        <IoMdRemoveCircleOutline
          className="todo-icons"
          onClick={handleRemovoTodo}
        />
        <FaRegEdit className="todo-icons" />
      </div>
    </div>
  );
}

export default Todo;
