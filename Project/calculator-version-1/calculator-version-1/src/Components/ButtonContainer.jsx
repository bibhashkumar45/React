import NumberButton from "./NumberButton";
import style from "./ButtonContainer.module.css";

const ButtonContainer=({btn})=>
{
  return (
    <div className={style.buttonContainer}>
      {btn.map(number=><NumberButton letter={number}/>)};
     
    </div>
  )
}

export default ButtonContainer;