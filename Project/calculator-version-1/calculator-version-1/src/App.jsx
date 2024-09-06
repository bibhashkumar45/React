import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import styles from './App.module.css';
import Display from './Components/Display';
import ButtonContainer from './Components/ButtonContainer';

function App() {

  let btn=['C',1,2,'+',3,4,'-',5,6,"*",7,8,'/','=',9,0,'.'];
  return (
    <div className={styles.calculator}>
      <Display/>
      <ButtonContainer btn={btn}/>
      
    </div>
  )
}

export default App
