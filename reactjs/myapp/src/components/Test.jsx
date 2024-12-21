import {useEffect, useState } from "react";

function Test1(){
    const [city, setCity]=useState("Warangal");
    useEffect(()=>{
    if(city==="Warangal")
    {
        setCity("Tealangana");
    }
    else{
        setCity("Bengaluru");
    }
},[])    

   
return(
    <div>
        {city}
    </div>
)
}
export default Test1;