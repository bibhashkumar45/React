import NumberButton from "./NumberButton";
import style from "./ButtonContainer.module.css";

const ButtonContainer=({btn,buttonClick})=>
{
  return (
    <div className={style.buttonContainer}>
      {btn.map(number=><NumberButton letter={number} key={number} onButtonClick={()=>buttonClick(number)}/>)};
     
    </div>
  )
}

export default ButtonContainer;