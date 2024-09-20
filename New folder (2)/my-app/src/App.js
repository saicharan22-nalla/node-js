
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Shop from './Sheets/Shop';
import ShopCategory from './Sheets/ShopCategory'
import Product from './Sheets/Products';
import Cart from './Sheets/Cart';
import LoginSignUp from './Sheets/LoginSignUp'

function App() {
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Shop/>}/>
        <Route exact path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route  path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route  path='/' element={<Product/>}>
        <Route path =':productId' element={<Product/>}/>
        </Route>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/login' element={<LoginSignUp/>}/>


      </Routes>
      </BrowserRouter>
     
    </div>
  
  )
}

export default App;
