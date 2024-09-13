import { useEffect } from "react";
import { useState } from "react";

function Timer()
{
 const [time,setTime]= useState(new Date());
//  console.log("Hellooooooooooooooooooooooo");
 

// setInterval(() => {
//   console.log("Hellooooooooooooooooooooooo");
//   setTime(new Date());
  
//  }, 1000);

useEffect(()=>
{
  const IntervalId=setInterval(() => {
    setTime(new Date());
    
   }, 1000); 

   return()=>
   {
    clearInterval(IntervalId);
   }

},[]);

 
  return <p>This is the current time: {time.toLocaleDateString()} - {" "}{time.toLocaleTimeString()}</p>
}
export default Timer;
