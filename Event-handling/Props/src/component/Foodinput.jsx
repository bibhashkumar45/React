import styles from "./Foodinput.module.css";
const Foodinput=()=>
{
  const onChangeEvent=(event)=>
  {
    console.log(event.target.value);
  }
  return (
    <>
    <input type="text" placeholder="Enter your food" className={styles.foodinput} 
    // onChange={(event)=>console.log(event.target.value)}
    // onChange={(event)=>onChangeEvent(event)}
    onChange={onChangeEvent}

    />
    </>
  )
}
export default Foodinput;