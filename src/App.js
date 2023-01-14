import { useState ,useEffect} from "react";
import "./App.css";


function App() {

  const [county,setCounty] = useState([]);

  useEffect(() => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  }, [])
  
  return (
    <div className="App">
      <h1>select your city</h1>
      <div>
        <select>
          <option>India</option>
        </select>
        <select>
          <option>Patna</option>
        </select>
        <button>submit</button>
      </div>
    </div>
  );
}

export default App;
