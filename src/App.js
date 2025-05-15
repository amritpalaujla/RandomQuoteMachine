import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Quote from "./components/Quote.js";

function App() {
  return (
    <div className="App">
      <div id="quoteBox">
        <Quote />
      </div>
    </div>
  );
}

export default App;
