import Product from "../common/Product";

function ProductDetail(props){
    const item = {
        name: "Iphone 15 Promax",
        price: 1200,
        qty: 5
    }
    return  (
       <div>
            <h1>Product Detail</h1>
            <Product item={item}/>
       </div>     
    );
}
export default ProductDetail;