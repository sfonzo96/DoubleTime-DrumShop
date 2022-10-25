import { React } from 'react';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout';
import { Tracker } from './components/Tracker';
import './style.scss'


function App() {


  
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:typeId/' element={<ItemListContainer />} />
          <Route path='/category/:typeId/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout /> }/>
          <Route path='/tracker' element={<Tracker />} />
        </Routes>
      </CartProvider>
      {/* <Footer /> */}
    </>
  )    
} 

export default App;
