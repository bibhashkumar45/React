import styles from "./AppName.module.css";

function AppName()
{
  return ( 
  <div className="row">
     <h1 className={`${styles.todohading} col-6 offset-4`}>Todo App</h1>
  </div>
 
  )
}

export default AppName;