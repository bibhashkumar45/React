import style from "./NumberButton.module.css";
const NumberButton=({letter})=>
{
  return (
    <>
    <button className={style.buttonitSelf}>{letter}</button>
    </>
    
  )

}
export default NumberButton;