import React from "react";
import './App.scss';
import Header from "./components/Header";
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greetings='Productos'/>
    </>
  );
}

export default App;
