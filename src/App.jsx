import React from "react";
import "./App.css";
import RouterList from "./RouterList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterList />
      <Footer />
    </div>
  );
}

export default App;
