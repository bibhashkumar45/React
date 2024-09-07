import styles from "./Container.module.css";

const Container=(probs)=>
{
  return(
    <div className={styles.containerStyle}>{probs.children}</div>
  )
}
export default Container;

// it make container of some line of code like box.
// Children is special prop to for passing element into components;
