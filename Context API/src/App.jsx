
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import AddTodo from './component/AddTodo';
import TodoItems from './component/TodoItems';
import WelcomeMassage from './component/WelcomeMassage';
import Container from './component/Container';

import "./App.css"
import { useState } from 'react';
import { TodoItemContext } from './store/Todo-item-store';


function App() {


  let [initialTodoItems,settodoItems]=useState([]);

  const addNewItem=(addItem,addDate)=>
  {
    const newTodoItems=[...initialTodoItems,{
      name:addItem,
      dueDate:addDate,
    }];
    settodoItems(newTodoItems);
  }

  const DeleteButton=(todoItemName)=>
  {
    const newTodoItem=initialTodoItems.filter((item)=>item.name!=todoItemName)
    settodoItems(newTodoItem);
    
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
