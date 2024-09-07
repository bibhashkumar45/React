import { useState } from "react";
import Items from "./Items";
let FoodItem=(probs)=>{
  let [activebuyButton,setClickbuy]=useState([]);

  let onClickButton=(item)=>
  {
    let addClickBuyButton=[...activebuyButton,item];
    setClickbuy(addClickBuyButton);

  }


  return(
    <>
    <ul className="list-group">
  {(probs.foodListAttributes).map(item=><Items key={item} foody={item}
  buy={activebuyButton.includes(item)}
  
  handleOnclick={()=>onClickButton(item)}></Items>)}
</ul>
    </>
  )
}

export default FoodItem;