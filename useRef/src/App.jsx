
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import AddTodo from './component/AddTodo';
import TodoItems from './component/TodoItems';
import WelcomeMassage from './component/WelcomeMassage';
import Container from './component/Container';

import "./App.css"
import { useState } from 'react';


function App() {
  // const todoItems=[
  //   {
  //     name:"Buy Milk",
  //     dueDate:"06/09/2024",
  //   },
  //   {
  //     name:"Go to college",
  //     dueDate:"09/09/2024",
  //   },
  //   {
  //     name:"Software Eng Assignment",
  //     dueDate:"10/09/2024",
  //   },
  //   {
  //     name:"Devops",
  //     dueDate:"11/09/2024",
  //   },

  // ]

  let [initialTodoItems,settodoItems]=useState([]);

  const onClickAdd=(addItem,addDate)=>
  {
    const newTodoItems=[...initialTodoItems,{
      name:addItem,
      dueDate:addDate,
    }];
    settodoItems(newTodoItems);
  }

  const handleDeleteButton=(todoItemName)=>
  {
    const newTodoItem=initialTodoItems.filter((item)=>item.name!=todoItemName)
    settodoItems(newTodoItem);
  }

  
  return (
    <Container>
     <AppName/>
     <AddTodo handleAddButton={onClickAdd}/>
     {initialTodoItems.length===0 &&  <WelcomeMassage></WelcomeMassage>}
     <TodoItems todoItems={initialTodoItems} onClickDelete={handleDeleteButton}/>
    </Container>

  )
}

export default App
