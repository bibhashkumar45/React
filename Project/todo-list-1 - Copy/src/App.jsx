
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import AddTodo from './component/AddTodo';
import TodoItems from './component/TodoItems';

import "./App.css"


function App() {
  const todoItems=[
    {
      name:"Buy Milk",
      dueDtae:"06/09/2024",
    },
    {
      name:"Go to college",
      dueDtae:"09/09/2024",
    },
    {
      name:"Software Eng Assignment",
      dueDtae:"10/09/2024",
    },
    {
      name:"Devops",
      dueDtae:"11/09/2024",
    },

  ]


  
  return (
    <center className="todo-container">
     <AppName/>
     <AddTodo/>
     <TodoItems todoItems={todoItems}/>
    </center>

  )
}

export default App
