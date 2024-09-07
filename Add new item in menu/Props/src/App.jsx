

import FoodItem from './component/FoodItem';
import ErrorMassage from './component/ErrorMassage';
import './App.css';
import Container from "./component/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Foodinput from './component/Foodinput';
import { useState } from 'react';

function App() {
 

  
  // let [FoodItems,setFoodItems]=useState([]); 
  
  let [FoodItems,setFoodItems]=useState(["Dal","Green Vagitable","Roti",]);  // Return data from useState should be change
 


   const keyDown=(event)=>
  {
    if(event.key==="Enter")
    {
      let newFood=event.target.value;
      event.target.value="";
      let newitems=[...FoodItems,newFood];           // That's why new array is created.
      setFoodItems(newitems);
      console.log(`Food value entered is  : ${newFood}`);
    }
  }


  return (
  <>
    <Container>
    <h1 className="Header">Food Menu</h1>
    <Foodinput handleKeyDown={keyDown}></Foodinput>
    <ErrorMassage errorAttributes={FoodItems}></ErrorMassage>
    <FoodItem foodListAttributes={FoodItems}/>
    </Container>

    
  </>
    


    
  )
}

export default App





// React runs your app twice during development because of Strict Mode. It helps detect bugs and side effects in your code early on. This only happens in development, and it won’t affect your app when it's in production.
