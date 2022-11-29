import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div className="main">
      <div className="App">
      <label for="cname" className="cName">Input Color Name</label>
      <br/>
        <input
          type="text"
          name=""
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Please Enter Your Color Name / Code"
        />
        <br />
        <h2>Output Color</h2>
        <textarea
          rows="10"
          cols="20"
          style={{ backgroundColor: color }}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
