import { useContext } from "react";
import style from "./WelcomeMassage.module.css";
import { TodoItemContext } from "../store/Todo-item-store";
const WelcomeMassage = ({}) => {

  const contextObj= useContext(TodoItemContext);
  const todoItems=contextObj.initialTodoItems;
  return (
    <>
    {todoItems.length==0&&
       <div className="row">
       <div className={`alert alert-success col-8  offset-2 ${style.welcomeMassage}`} role="alert">
      <p className={style.para}>Enjoy your day!</p>
      </div>
       </div>
}
     
    </>
  );
};
export default WelcomeMassage;
