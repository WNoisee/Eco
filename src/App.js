import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/mens' element={<ShopCategory></ShopCategory>} category="men"></Route>
          <Route path='/womens' element={<ShopCategory></ShopCategory>} category="women"></Route>
          <Route path='/kids' element={<ShopCategory></ShopCategory>} category="kid"></Route>
          <Route path='/product' element={<Product></Product>}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<LoginSignUp></LoginSignUp>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
