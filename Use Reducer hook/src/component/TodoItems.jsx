import { useContext } from "react";
import { TodoItemContext } from "../store/Todo-item-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

const TodoItems=({onClickDelete})=>
{
  const contextObj= useContext( TodoItemContext);
  const todoItems=contextObj.initialTodoItems;

  const deleteBtn=contextObj.DeleteButton;

 
  return(
    

       <div className={styles.TodoStyle}>
        {todoItems.map((data)=>
         <TodoItem key={data.name} todoName={data.name} todoDate={data.dueDate} ></TodoItem>
        )}
     </div>
    
  )
}

export  default TodoItems;