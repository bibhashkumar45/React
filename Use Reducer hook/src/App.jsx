
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import AddTodo from './component/AddTodo';
import TodoItems from './component/TodoItems';
import WelcomeMassage from './component/WelcomeMassage';
import Container from './component/Container';

import "./App.css"
import { useReducer, useState } from 'react';
import { TodoItemContext } from './store/Todo-item-store';


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


function App() {
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
    
  }


  
  return (

    <TodoItemContext.Provider value={{
      initialTodoItems: initialTodoItems,
      addNewItem: addNewItem,
      DeleteButton:DeleteButton,
      

      }}>
    <Container>
     <AppName/>
     <AddTodo />
    <WelcomeMassage ></WelcomeMassage>
     <TodoItems/>
    </Container>
    </TodoItemContext.Provider>

  )
}

export default App







// When the App component renders for the first time, without any user interaction (such as clicking buttons), only the initial setup of the state happens. No actions like adding or deleting todo items are dispatched at this point. Let's go through what exactly happens during this first render when there are no button clicks or other interactions.

// Step-by-Step Flow of the First Render (No Button Click)
// React Renders the App Component:

// When the App component is rendered for the very first time, it executes the code inside the function. Here, it starts by calling useReducer.
// useReducer Hook Initialization:

// The useReducer hook is executed:
// js
// Copy code
// const [initialTodoItems, todoDispatch] = useReducer(todoReducer, []);
// What happens here:
// useReducer initializes the state (initialTodoItems) with an empty array [] (since no todo items exist yet).
// todoReducer is passed as the reducer function that will handle future state updates.
// The todoDispatch function is created and returned by useReducer. This is a function that will allow you to dispatch actions (like adding or deleting items) later on, but it is not called during the first render because no actions have been triggered yet.
// Result of useReducer:
// initialTodoItems = [] (an empty array representing the current state of todo items).
// todoDispatch is a function that can be used to send actions to the todoReducer, but it's not used yet because no actions have been dispatched.
// Rendering the Initial UI:

// After setting up the state and todoDispatch, the component proceeds to render the UI.

// The component's JSX (which is not shown in the code snippet) will typically render:

// An empty todo list (since initialTodoItems is currently []).
// Input fields or buttons that allow the user to add or delete items. These buttons are not yet clicked, so no state updates are happening.
// No function calls are made during this phase except for the initial useReducer call, which only sets up the initial state.

// Summary of the First Render:
// The component renders for the first time.
// useReducer initializes:
// initialTodoItems as [].
// todoDispatch as a function for dispatching actions (not yet called).
// The UI is rendered with an empty list of todo items (because initialTodoItems is an empty array).
// No other function calls happen since the user has not interacted with the component.
// What Does Not Happen During the First Render:
// addNewItem is not called because the user hasn't clicked the "Add" button or taken any other actions to add an item.
// DeleteButton is not called because the user hasn't clicked the "Delete" button.
// todoDispatch is not called because no actions (like adding or deleting items) have been dispatched.
// Conclusion:
// During the first render, only the state is initialized by useReducer. No items are added or deleted from the todo list, and no dispatch actions are triggered. The app is simply displaying the initial UI, waiting for the user to interact with it. Once the user interacts (such as by clicking the "Add" or "Delete" buttons), the relevant functions (addNewItem or DeleteButton) will be called, and the state will change accordingly.


