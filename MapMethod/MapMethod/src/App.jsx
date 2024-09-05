
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let FoodItems=["Dal","Green Vagitable","Roti","Paneer","Samosa"];

  return (
    <>
      <h1>Food Items</h1>
<ul className="list-group">
  {FoodItems.map(item=><li key={item} className="list-group-item">{item}</li>)}
</ul>
    </>
  )
}

export default App


// Key is assign to individual element so that if there  is one update in one element then it will not update entire page
