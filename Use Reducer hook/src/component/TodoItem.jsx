import { useContext } from "react";
import style from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/Todo-item-store";

function TodoItem({todoName,todoDate})
{

  const contextObj= useContext( TodoItemContext);
  const deleteBtn=contextObj.DeleteButton;

  return <div className="container ">
  <div className="row k-row">
    <div className={`col-4 ${style.dataItem}`}>{todoName}</div>
    <div className={`col-4 ${style.todoDate}`}>{todoDate}</div>
    <div className="col-2">
    <button type="button" className="btn btn-danger" onClick={()=>deleteBtn(todoName)}>Delete</button>
    </div>
  </div>
  </div>
}

export default TodoItem;