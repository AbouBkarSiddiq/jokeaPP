import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const [joke, setJoke] = useState({});
  useEffect(() => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        console.log(response.data);
        setJoke(response.data);
      }
    );
  }, [refresh]);
  return (
    <div>
      {joke.setup}
      {joke.punchline}
      <br />
      <center>
        <button onClick={() => setRefresh(!refresh)}>Get New Joke</button>
      </center>
    </div>
  );
}
