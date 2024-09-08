import style from "./AddTodo.module.css";
import { useState,useRef} from "react";
import { IoBagAdd } from "react-icons/io5";
function AddTodo({ handleAddButton }) {
  let [newItem, setNewItem] = useState("");
  let [newDate, setNewDate] = useState("");
  let [countNumber ,setCount]=useState(0);       // Test off useState
  // let demoCout=useRef(0);                      // Test of useRef

  let onChangeItem = (event) => {
    setNewItem(event.target.value);
    countNumber++;
    // demoCout.current++;
  };

  let onChangeDate = (event) => {
    setNewDate(event.target.value);
    // console.log(demoCout.current);
    console.log(countNumber);
  };

  const handleOnclickButton = (event) => {
    event.preventDefault();
    handleAddButton(newItem, newDate);
    setNewItem("");
    setNewDate("");
  };

  return (
    <form  onSubmit={handleOnclickButton} className="row k-row">
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter Todo here"
          onChange={onChangeItem}
          value={newItem}
          className={style.addTodo}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          onChange={onChangeDate}
          value={newDate}
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
