import React from "react";
import "./index.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  return (
    <h1>
      <Header />
      <Meme />
    </h1>
  );
}

// isGoingOut === True ? "YES" : "NO"
