import style from "./NumberButton.module.css";
const NumberButton=({letter,onButtonClick})=>
{
  return (
    <>
    <button className={style.buttonitSelf} 
    onClick={onButtonClick}>{letter}</button>
    </>
    
  )

}
export default NumberButton;