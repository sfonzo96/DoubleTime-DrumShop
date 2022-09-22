import { React } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/:typeId/' element={<ItemListContainer />} />
        <Route path='/:typeId/:productId' element={<ItemDetailContainer />} />
        <Route path='/cart'/>
      </Routes>
      {/* <Footer /> */}
    </>
  )    
} 
export default App;
