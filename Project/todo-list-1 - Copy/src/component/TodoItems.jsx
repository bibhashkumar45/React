import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

const TodoItems=({todoItems})=>
{
  return(
    
       <div className={styles.TodoStyle}>
        {todoItems.map((data)=>
         <TodoItem todoName={data.name} todoDate={data.dueDate}></TodoItem>
        )}
     </div>
    
  )
}

export  default TodoItems;