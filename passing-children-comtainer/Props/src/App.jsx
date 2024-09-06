

import FoodItem from './component/FoodItem';
import ErrorMassage from './component/ErrorMassage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from "./component/Container";

function App() {
  let FoodItems=["Dal","Green Vagitable","Roti","Paneer","Samosa","Lassi"];
  // let FoodItems=[];
  return (
  <>
    <Container>
    <h1 className="Header">Food Menu</h1>
    <ErrorMassage errorAttributes={FoodItems}></ErrorMassage>
    <FoodItem foodListAttributes={FoodItems}/>
    </Container>

     <Container>
      <p>This is very effective Food menu for the waight loss within one month without cheating.</p>
   
    </Container>
  </>
    


    
  )
}

export default App
