import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  });

  return (
    <div className="App">
      <div id="quoteBox"></div>
    </div>
  );
}

export default App;
