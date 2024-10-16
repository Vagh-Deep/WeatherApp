
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import { BiSearch } from "react-icons/bi";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherService";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
 


const App = () => {

  
    const [query,setQuery]=useState({q:'Jaipur'});
    const [units,setUnits]=useState("metric");
    const [weather,setWeather]=useState(null);
  

const formatBackground=()=>{
  if(!weather) return 'from-cyan-500 to-blue-700';
  const threshold = units==="metric"?20:46;
  if(weather.temp<=threshold) return "from-cyan-400 to-blue-700"
  else{
    return "from-yellow-600 to orange-100"
  }

};



  const getWeather= async()=>{
    
     await  getFormattedWeatherData({...query,units}).then((data)=>{setWeather(data)
      
     });
  
  }

  useEffect(()=>{getWeather();},[query,units]);




  
  return (
    <div className={ `mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl  shadow-gray-400 ${formatBackground()}`}> <TopButtons setQuery={setQuery} /> 
    <Inputs setUnits={setUnits} setQuery={setQuery}/>
    {weather && (<> <TimeAndLocation weather={weather}/>
    <TempAndDetails weather={weather} units={units}/>
   <Forecast title='3 hour step forecast' data={weather.hourly}/>
   <Forecast title='daily forecast' data={weather.daily}   /> </>) }
     


   
    
    </div>
  )
}

export default App