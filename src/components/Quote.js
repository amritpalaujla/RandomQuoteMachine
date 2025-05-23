import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
  //here we are creating state vatiables which we can use later to get a quote
  const [quotes, setQuotes] = useState([]);
  const [idx, setIdx] = useState(0);
  const [color, setColor] = useState("");
  const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  // here we are fetching quotes from a link or better known as an API endpoint
  // I feel smart whenever using the word API + 1000 aura points

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // here we set the quotes array to quotes variable we made above
        setQuotes(data.quotes);
        console.log("my created quotes array is : " + quotes);
        // here we set the random index variable we made above
        setIdx(Math.floor(Math.random() * data.quotes.length));
        // random coloring
        const randomColor =
          colorArray[Math.floor(Math.random() * colorArray.length)];
        setColor(randomColor);
        document.body.style.backgroundColor = randomColor;
        document.documentElement.style.setProperty(
          "--randomColor",
          randomColor
        );
      })
      .catch((err) => console.error("Fetch error,", err));
  }, []);

  const newQuote = () => {
    setIdx(Math.floor(Math.random() * quotes.length));
    const randomColor =
      colorArray[Math.floor(Math.random() * colorArray.length)];
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;
    //document.getElementById("newQuoteBtn").style.backgroundColor = randomColor;
    document.documentElement.style.setProperty("--randomColor", randomColor);
  };

  //let idx = Math.floor(Math.random() * 29);

  // this will prevent runtime
  if (quotes.length === 0) {
    return;
  } else {
    return (
      <div>
        <p id="quote">
          <span id="qMark">
            <FaQuoteLeft />
          </span>
          {quotes[idx].quote}
        </p>

        <p id="author">
          <i>~ {quotes[idx].author}</i>
        </p>
        <div id="Btn">
          <button id="newQuoteBtn" onClick={newQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
};

export default Quote;
