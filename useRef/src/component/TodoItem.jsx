import style from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

function TodoItem({todoName,todoDate,handleDeleteButton})
{
  return <div className="container ">
  <div className="row k-row">
    <div className={`col-4 ${style.dataItem}`}>{todoName}</div>
    <div className={`col-4 ${style.todoDate}`}>{todoDate}</div>
    <div className="col-2">
    <button type="button" className="btn btn-danger" onClick={()=>handleDeleteButton(todoName)}>Delete</button>
    </div>
  </div>
  </div>
}

export default TodoItem;