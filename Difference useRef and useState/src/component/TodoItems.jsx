import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

const TodoItems=({todoItems,onClickDelete})=>
{
  return(
    
       <div className={styles.TodoStyle}>
        {todoItems.map((data)=>
         <TodoItem key={data.name} todoName={data.name} todoDate={data.dueDate} handleDeleteButton={onClickDelete} ></TodoItem>
        )}
     </div>
    
  )
}

export  default TodoItems;