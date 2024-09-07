import styles from "./Foodinput.module.css";
const Foodinput=({handleKeyDown})=>
{
  return (
    <>
    <input type="text" placeholder="Enter your food" className={styles.foodinput} 
    onKeyDown={handleKeyDown}

    />
    </>
  )
}
export default Foodinput;