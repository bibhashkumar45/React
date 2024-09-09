import { createContext } from "react";

export const TodoItemContext=createContext(
  {
    initialTodoItems: initialTodoItems,
    addNewItem: addNewItem,
    DeleteButton:DeleteButton,
    

    }
);
