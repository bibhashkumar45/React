
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//      --------------------------------------- Conditional Rending -----------------------------
function App() {

  let FoodItems=["Dal","Green Vagitable","Roti","Paneer","Samosa"];
  // let FoodItems=[];

  

  // --------------- It will apply on whole page -------------------
  // if(FoodItems.length==0){
  //   return <li>I am still hungry</li>  
  // }

  return (
    <>
      <h1>Food Items</h1>
      {/* Ternary Statement */}
      {/* {FoodItems.length==0?<li>I am still hungry</li>:null} */}
      {/* Logical Statement */}
      {FoodItems.length==0&& <li>I am still hungry</li>}
<ul className="list-group">
  {FoodItems.map(item=><li key={item} className="list-group-item">{item}</li>)}
</ul>
    </>
  )
}

export default App


// Key is assign to individual element so that if there  is one update in one element then it will not update entire page



// --------------------------- Map Meyhod ----------------------------------------------------------------
// {
//   let FoodItems=["Dal","Green Vagitable","Roti","Paneer","Samosa"];
//   return (
//     <>
//       <h1>Food Items</h1>
// <ul className="list-group">
//   {FoodItems.map(item=><li key={item} className="list-group-item">{item}</li>)}
// </ul>
//     </>
//   )
// }
