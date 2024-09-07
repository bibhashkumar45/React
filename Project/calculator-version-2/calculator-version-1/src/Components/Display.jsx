import styles from "./Display.module.css";
const Display=({inputValue})=>
{
  return(
    <>
    <input type="text" className={styles.display} readOnly value={inputValue} />
    </>
  );
}

export default Display;