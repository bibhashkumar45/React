// Event Handling

import styles from "./Items.module.css";
let Items=({foody,handleOnclick,buy})=>
{
  return (
    <>
    <li className={`${styles["bg-food"]} list-group-item bg-food  ${buy&& "list-group-item-warning"}`}><span className={styles["Food-weight"]}>{foody}</span>
    <button className={`${styles.button} btn btn-info`} onClick={handleOnclick}>Buy</button></li>
    </>
  );
}
export default Items;



