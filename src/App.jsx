import React from "react";
import './App.css';
import Header from "./components/header/Header";
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greetings='Acá estarían los productos'/>
    </>
  );
}

export default App;
