
function Product(props){
    const item = props.item;
    return (
        <div className="col-4">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <p>{item.qty > 0 ? "In stock": "Out of stock"}</p>
        </div>
    );
}
export default Product;