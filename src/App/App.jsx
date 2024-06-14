import React from "react";
import "./App.css";
import Hero from "../Components/Hero/Hero";
import superheroArr from "../superheroArr.js";

function App() {
  return (
    <div className="superheroArr">
      {superheroArr.map((hero) => (
        <Hero key={hero.id} {...hero} />
      ))}
    </div>
  );
}

export default App;

{
  /* <Hero arrSuperhero={superheroArr} />; */
}
