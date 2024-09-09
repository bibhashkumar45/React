import { createContext, useReducer } from "react";

export const TodoItemContext=createContext(
  {
    initialTodoItems:[],
    addNewItem:()=>{},
    DeleteButton:()=>{},
    }
);

const todoReducer=(currTodo,action)=>
  {
    let newTodoItems=currTodo;
    if(action.type==="NEW_ITEM")
    {
        newTodoItems=[...currTodo,{
        name:action.payload.addItem,
        dueDate:action.payload.addDate,
      }];
    }
    else if(action.type==="DELETE_BTN")
    {
      newTodoItems=currTodo.filter((item)=>item.name!=action.payload.todoItemName);
  
  
    }
      return newTodoItems;
  
  }
  


const TodoItemContextProvider=({children})=>
{

  const [initialTodoItems,todoDispatch]=useReducer(todoReducer,[]);

  const addNewItem=(addItem,addDate)=>
  {

    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        addItem,
        addDate,
      }
    }
    todoDispatch(newItemAction);
  }

  const DeleteButton=(todoItemName)=>
  {

    const  deleteAction={
      type:"DELETE_BTN",
      payload:{
        todoItemName,
      }
    }
    todoDispatch(deleteAction);
    
  };

  return   <TodoItemContext.Provider value={{
    initialTodoItems,
    addNewItem,
    DeleteButton,
    }}>

      {children}
 
  </TodoItemContext.Provider>

}
export default TodoItemContextProvider;
