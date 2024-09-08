import style from "./AddTodo.module.css";
import { useRef} from "react";
import { IoBagAdd } from "react-icons/io5";
function AddTodo({ handleAddButton }) {
  let newItemRef=useRef("");                      // Test of useRef
  let newDateRef=useRef("");  

  const handleOnclickButton = (event) => {
    event.preventDefault();
    let newItem=newItemRef.current.value;
    let newDate=newDateRef.current.value;
    handleAddButton(newItem, newDate);
    newItemRef.current.value="";
    newDateRef.current.value="";
  };

  return (
    <form  onSubmit={handleOnclickButton} className="row k-row">
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter Todo here"
          ref={newItemRef}
          className={style.addTodo}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          ref={newDateRef}
          className={style.addDate}
        />
      </div>
      <div className="col-2">
        <button
        type="submit"
          className="btn btn-success"
        >
          <IoBagAdd className={style.addicon} />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
