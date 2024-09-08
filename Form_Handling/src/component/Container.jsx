import style from "./Container.module.css";

const Container=(prob)=>
{
  return (
    <div className={style.containerDesign} >{prob.children}</div>
  )
}

export default Container;