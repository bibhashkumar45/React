import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.calculator}>
      <input type="text" className={styles.display} />
      <div className={styles.buttonContainer}>
        <button className={styles.buttonitSelf}>c</button>
        <button className={styles.buttonitSelf}>1</button>
        <button className={styles.buttonitSelf}>2</button>
        <button className={styles.buttonitSelf}>3</button>
        <button className={styles.buttonitSelf}>4</button>
      </div>
    </div>
  )
}

export default App
