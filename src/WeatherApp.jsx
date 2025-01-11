import Searchboxes from "./searchbox";
import InfoBox from "./infobox";
import { useState } from "react";
export default function Weatherapp(){
    
    const [weatherinfo,setweatherinfo]=useState({
        city:"delhi",
        feelslike:24.54,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    
   let updateinfo=(newinfo)=>{
 setweatherinfo(newinfo);
   }
    return(
<div style={{textAlign:"center"}}>
<h2>Weather App by Manas</h2>
<Searchboxes updateinfo={updateinfo}/>
<InfoBox info={weatherinfo}/>

</div>
    );
}