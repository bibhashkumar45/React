import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import styles from './App.module.css';
import Display from './Components/Display';
import ButtonContainer from './Components/ButtonContainer';
import { useState } from 'react';

function App() {

  let [calval,setCalval]=useState("");

   const buttonClick=(buttontext)=>
    {
      if(buttontext==='C')
      {
        setCalval("");

      }
      else if(buttontext==='=')
      {
        let result=eval(calval);
        setCalval(result);
      }
      else if(buttontext==="back")
      {
        let newStr = calval.slice(0, -1); 
        setCalval(newStr);

      }
      else
      {
        const newDisplayValue=calval+buttontext;
        setCalval(newDisplayValue);
      }
    };

  let btn=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.','back'];
  return (
    <div className={styles.calculator}>
      <Display inputValue={calval}/>
      <ButtonContainer btn={btn} buttonClick={buttonClick}/>
      
    </div>
  )
}

export default App
