import styles from "./Foodinput.module.css";
const Foodinput=({handleonChange})=>
{
  return (
    <>
    <input type="text" placeholder="Enter your food" className={styles.foodinput} 
    onChange={handleonChange}

    />
    </>
  )
}
export default Foodinput;