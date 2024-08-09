import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  // let FoodItems=["Dal","Hari Sabji","Anar","Bajra","Makka di roti"];
  let FoodItems=[];
  // let emptyMassage=FoodItems.length==0? <h1>I am still hungry</h1>:null;


  return  <React.Fragment>
  <h1>Healthy Food</h1>

  {/* This conditial statement (Ternary statement) use instant of if-else statement */}
  {/* {emptyMassage}; */}

{/* Logical Operator */}
  {FoodItems.length== 0 && <h1>I am still hungry</h1>}    
  <ul className="list-group">
  {FoodItems.map((item)=> <li key={item}  className="list-group-item">{item}</li>)};  
  {/* Key use to assign special number to each and every list that are  present on Frontend */}
  {/* map os the alternate  of loop in jsx */}

</ul>
</React.Fragment>
}

export default App


