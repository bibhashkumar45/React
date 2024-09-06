import styles from "./Items.module.css";
let Items=({foody})=>
{
  // let {foody}=props;
  return (
    <>
    {/* Regulat css */}
    {/* <li className="list-group-item bg-food"><span className="Food-weight">{foody}</span></li> */}
    <li className={`${styles["bg-food"]} `}><span className={styles["Food-weight"]}>{foody}</span></li>
    </>
  );
}
export default Items;


// list-group-item bg-food