import logo from './logo.svg';
import './App.css';
import Product from './component/common/Product';
import Menu from './component/common/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './component/page/Home';
import Category from './component/page/Category';
import Cart from './component/page/Cart';

function App() { // jsx
  const ps = [
    {
      name: "Iphone 15 Pro Max",
      price: 1200,
      qty: 1
    },
    {
      name: "Iphone 14 Pro Max",
      price: 1100,
      qty: 10
    },
    {
      name: "Iphone 13",
      price: 800,
      qty: 0
    }
  ];
  return (
    <div className="App">
      <Menu/>
      <section className='main'>
          <Routes>
              <Route path='/' Component={Home} />
              <Route path='/category' Component={Category} />
              <Route path='/cart' Component={Cart} />
          </Routes>
       </section>
    </div>
  );
}

export default App;
