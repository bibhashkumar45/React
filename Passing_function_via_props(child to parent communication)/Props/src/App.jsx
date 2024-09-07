

import FoodItem from './component/FoodItem';
import ErrorMassage from './component/ErrorMassage';
import './App.css';
import Container from "./component/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Foodinput from './component/Foodinput';

function App() {
  let FoodItems=["Dal","Green Vagitable","Roti","Paneer","Samosa","Lassi"];
  // let FoodItems=[];

  // let showInput="favorite food";

   const onChangeEvent=(event)=>
  {
    console.log(event.target.value);
    // showInput=event.target.value;
  }


  return (
  <>
    <Container>
    <h1 className="Header">Food Menu</h1>
    <Foodinput handleonChange={onChangeEvent}></Foodinput>

    {/* It will not change showInput because  it is stateless */}
    {/* <p>{showInput}</p>   */}

    <ErrorMassage errorAttributes={FoodItems}></ErrorMassage>
    <FoodItem foodListAttributes={FoodItems}/>
    </Container>

    
  </>
    


    
  )
}

export default App
