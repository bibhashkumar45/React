

import FoodItem from './component/FoodItem';
import ErrorMassage from './component/ErrorMassage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  let FoodItems=["Bhat","Green Vagitable","Roti","Paneer","Samosa"];
  // let FoodItems=[];
  return (
    <>
    <h1 className="Header">Food Menu</h1>
    <ErrorMassage errorAttributes={FoodItems}></ErrorMassage>
    <FoodItem foodListAttributes={FoodItems}/>
    </>
  )
}

export default App
