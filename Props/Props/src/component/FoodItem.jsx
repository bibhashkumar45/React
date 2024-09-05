import Items from "./items";
let FoodItem=(probs)=>{
  return(
    <>
    <ul className="list-group">
  {(probs.foodListAttributes).map(item=><Items key={item} foody={item}></Items>)}
</ul>
    </>
  )
}

export default FoodItem;