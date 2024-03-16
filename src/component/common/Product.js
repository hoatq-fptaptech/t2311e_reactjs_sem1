import { useContext, useState } from "react";
import Context from "../../context/context";
function Product(props){ // component
    const item = props.item;
    const {cart,setCart} = useContext(Context);
    function addToCart(){
        setCart([...cart,item]);
        // cart.push(item)
        // setCart(cart);
    }
    return (
        <div className="col-4">
            <h1>Số sản phẩm trong giỏ hàng: {cart.length}</h1>
            <img src={item.thumbnail} />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.qty > 0 ? "In stock": "Out of stock"}</p>
            <button onClick={addToCart} className="btn btn-primary" type="button">Add to cart</button>
        </div>
    );
}
export default Product;