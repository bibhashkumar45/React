import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodList from './component/FoodList';
import ErrorList from './component/ErrorList';


function App() {

  let FoodItems=["Dal","Hari Sabji","Anar","Bajra","Makka di roti"];
  // let FoodItems=[];

  return  <>
  <h1>Healthy Food</h1> 
  <ErrorList></ErrorList>
  <FoodList></FoodList>
</>
}

export default App


