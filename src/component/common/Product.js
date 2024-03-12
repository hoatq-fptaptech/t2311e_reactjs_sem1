import { useState } from "react";
function Product(props){ // component
    const item = props.item;
    const [count,setCount] = useState(0);
    function increment(){
        setCount(count+1);
        // setCount(count>0?count-1:0);
    }
    return (
        <div className="col-4">
            <img src={item.thumbnail} />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.qty > 0 ? "In stock": "Out of stock"}</p>
            <h2>Count: {count}</h2>
            <button onClick={increment} className="btn btn-primary" type="button">Increment</button>
        </div>
    );
}
export default Product;