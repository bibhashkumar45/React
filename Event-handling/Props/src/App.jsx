

import FoodItem from './component/FoodItem';
import ErrorMassage from './component/ErrorMassage';
import './App.css';
import Container from "./component/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Foodinput from './component/Foodinput';

function App() {
  let FoodItems=["Dal","Green Vagitable","Roti","Paneer","Samosa","Lassi"];
  // let FoodItems=[];
  return (
  <>
    <Container>
    <h1 className="Header">Food Menu</h1>
    <Foodinput></Foodinput>

    <ErrorMassage errorAttributes={FoodItems}></ErrorMassage>
    <FoodItem foodListAttributes={FoodItems}/>
    </Container>

    
  </>
    


    
  )
}

export default App
