import { React } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:typeId/' element={<ItemListContainer />} />
          <Route path='/category/:typeId/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </CartProvider>
      {/* <Footer /> */}
    </>
  )    
} 
export default App;
