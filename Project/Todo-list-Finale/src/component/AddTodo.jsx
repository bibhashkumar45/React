import style from './AddTodo.module.css'
import { useState } from "react";
function AddTodo({handleAddButton})
{

  let [newItem,setNewItem]=useState();
  let [newDate,setNewDate]=useState();

  let onChangeItem=(event)=>
  {
    setNewItem(event.target.value)

  }

  let onChangeDate=(event)=>
    {
      setNewDate(event.target.value)
    }

    const handleOnclickButton=()=>
    {
      handleAddButton(newItem,newDate);
      setNewItem("");
      setNewDate("");

    }

  return  <div className="container text-center">
  <div className="row k-row">
    <div className="col-4">
      <input type="text" placeholder='Enter Todo here'  onChange={onChangeItem} value={newItem} className={style.addTodo}/>
    </div>
    <div className="col-4">
    <input type="date" onChange={onChangeDate}  value={newDate}  className={style.addDate}/>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success" onClick={handleOnclickButton}>Add</button>
    </div>
  </div>
  </div>
}

export default AddTodo;