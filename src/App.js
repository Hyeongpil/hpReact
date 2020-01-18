import React from "react";

function Food({ fav }) {
  return <h1>moomin like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      hello
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
