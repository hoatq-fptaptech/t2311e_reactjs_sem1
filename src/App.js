import logo from './logo.svg';
import './App.css';
import Product from './component/common/Product';
import Menu from './component/common/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './component/page/Home';
import Category from './component/page/Category';
import Cart from './component/page/Cart';
import ProductDetail from './component/page/ProductDetail';

function App() { // jsx
  return (
    <div className="App">
      <Menu/>
      <section className='main'>
          <Routes>
              <Route path='/' Component={Home} />
              <Route path='/category' Component={Category} />
              <Route path='/product' Component={ProductDetail} />
              <Route path='/cart' Component={Cart} />
          </Routes>
       </section>
    </div>
  );
}

export default App;
