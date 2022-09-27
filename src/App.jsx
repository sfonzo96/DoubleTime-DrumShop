import { React } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:typeId/' element={<ItemListContainer />} />
        <Route path='/category/:typeId/:productId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  )    
} 
export default App;
