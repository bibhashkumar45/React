import Items from "./Items";
let FoodItem=(probs)=>{
  return(
    <>
    <ul className="list-group">
  {(probs.foodListAttributes).map(item=><Items key={item} foody={item} handleOnclick={()=>console.log(`${item} is clicked`)}></Items>)}
</ul>
    </>
  )
}

export default FoodItem;