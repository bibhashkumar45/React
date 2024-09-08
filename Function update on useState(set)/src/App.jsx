import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import WelcomeMassage from "./component/WelcomeMassage";
import Container from "./component/Container";

import "./App.css";
import { useState } from "react";

function App() {
  
  let [initialTodoItems, settodoItems] = useState([]);

  const onClickAdd = (addItem, addDate) => {
    // const newTodoItems=[...initialTodoItems,{
    //   name:addItem,
    //   dueDate:addDate,
    // }];
    // settodoItems((newTodoItems));


    // Avoiding Stale State Issues: This approach helps avoid issues where the state might be stale due to multiple updates being processed at once.(Async task performs)

    // settodoItems((currItem) => {
    //   const newTodoItems = [
    //     ...currItem,
    //     {
    //       name: addItem,
    //       dueDate: addDate,
    //     },
    //   ];
    //   return newTodoItems;
    // });

    settodoItems((currItem) => 
      [
        ...currItem,
        {
          name: addItem,
          dueDate: addDate,
        },
      ]
    );
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItem = initialTodoItems.filter(
      (item) => item.name != todoItemName
    );
    settodoItems(newTodoItem);
  };

  return (
    <Container>
      <AppName />
      <AddTodo handleAddButton={onClickAdd} />
      {initialTodoItems.length === 0 && <WelcomeMassage></WelcomeMassage>}
      <TodoItems
        todoItems={initialTodoItems}
        onClickDelete={handleDeleteButton}
      />
    </Container>
  );
}

export default App;
