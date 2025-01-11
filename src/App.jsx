import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Searchbox from './searchbox';
import InfoBox from './infobox';
import Weatherapp from './WeatherApp';


function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Weatherapp />
     </div>
  )
}

export default App
