import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Quote = () => {
  //here we are creating state vatiables which we can use later to get a quote
  const [quotes, setQuotes] = useState([]);
  const [idx, setIdx] = useState(0);
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
      })
      .catch((err) => console.error("Fetch error,", err));
  }, []);

  //let idx = Math.floor(Math.random() * 29);

  // this will prevent runtime
  if (quotes.length === 0) {
    return;
  } else {
    return <p id="quote">{quotes[idx].quote}</p>;
  }
};

export default Quote;
