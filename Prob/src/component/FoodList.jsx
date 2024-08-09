const FoodList = ()=>
{
  let FoodItems=["Dal","Hari Sabji","Anar","Bajra","Makka di roti"];
  return <>
  <ul className="list-group">
  {FoodItems.map((item)=> <li key={item}  className="list-group-item">{item}</li>)};  
</ul></>
}
export default FoodList;