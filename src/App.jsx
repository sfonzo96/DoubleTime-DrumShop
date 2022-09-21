import {React} from "react";
import './App.scss';
import {Header} from "./components/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greetings='Productos'/>
      <ItemDetailContainer />
    </>
  );
}

export default App;
