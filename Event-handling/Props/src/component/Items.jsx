// Event Handling

import styles from "./Items.module.css";
let Items=({foody})=>
{
  const clickonButton=()=>
  {
    console.log(`${foody} begin bought`);
  }
  
  return (
    <>
    
    <li className={`${styles["bg-food"]} list-group-item bg-food `}><span className={styles["Food-weight"]}>{foody}</span>
    <button className={`${styles.button} btn btn-info`} onClick={clickonButton}>Buy</button></li>
    
    </>
  );
}
export default Items;


// list-group-item bg-food
