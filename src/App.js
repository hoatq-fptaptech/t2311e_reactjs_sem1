import logo from './logo.svg';
import './App.css';
import Product from './component/common/Product';

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
      <section>
        <div className='container'>
          <div className='row'>
          { // code logic here
            ps.map(
              (e,i)=>{
                return <Product key={i} item={e}/>
              }
            )
          }
        </div>
       </div>
       </section>
    </div>
  );
}

export default App;
